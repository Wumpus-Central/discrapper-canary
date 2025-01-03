n.d(t, {
    m: function () {
        return l;
    }
}),
    n(47120);
var i = n(243814),
    r = n(103964);
let l = {
        [r.Q5.INITIATE_IMAGE_UPLOAD]: {
            request: void 0,
            response: (e) => e.object({ image_url: e.string().required() })
        },
        [r.Q5.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => (0, r.C5)(e.object({ mediaUrl: e.string().required().max(1024) }))
        },
        [r.Q5.AUTHENTICATE]: {
            request: (e) => (0, r.C5)(e.object({ access_token: e.string().allow(null).optional() })),
            response: (e) =>
                e.object({
                    access_token: e.string().required(),
                    user: e
                        .object({
                            username: e.string().required(),
                            discriminator: e.string().required(),
                            id: e.string().required(),
                            avatar: e.string().allow(null),
                            public_flags: e.number().required(),
                            global_name: e.string().allow(null)
                        })
                        .required(),
                    scopes: e
                        .array()
                        .items(e.string().valid(...(0, r.no)(i.x)))
                        .required(),
                    expires: e.string().required(),
                    application: e
                        .object({
                            description: e.string().required(),
                            icon: e.string().allow(null),
                            id: e.string().required(),
                            rpc_origins: e.array().items(e.string()).optional(),
                            name: e.string().required()
                        })
                        .required()
                })
        },
        [r.Q5.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) =>
                e
                    .object({
                        participants: e
                            .array()
                            .items(
                                a(e)
                                    .keys({ nickname: e.string().description('Server nickname. Not unique.') })
                                    .required()
                            )
                            .required()
                    })
                    .required()
        },
        [r.Q5.SHARE_INTERACTION]: {
            request: (e) =>
                (0, r.C5)(
                    e.object({
                        command: e.string().required(),
                        content: e.string().max(2000),
                        preview_image: e.object({
                            height: e.number().required(),
                            url: e.string().required(),
                            width: e.number().required()
                        }),
                        components: e.array().items(s(e))
                    })
                ),
            response: void 0
        }
    },
    a = (e) =>
        e
            .object({
                id: e.string().required().description('User ID'),
                username: e.string().required(),
                global_name: e.string().allow(null).description('Global Discord name. Not unique.'),
                discriminator: e.string().required().description('Global name discriminator. Will be 0 if a unique username'),
                avatar: e.string().allow(null).description('User Avatar ID'),
                flags: e.number().required().description('Public user flags'),
                bot: e.bool().required().description('If a bot user.'),
                avatar_decoration_data: e
                    .object({
                        asset: e.string().required(),
                        skuId: e.string()
                    })
                    .allow(null)
                    .description('Details about avatar decoration'),
                premium_type: e.number().allow(null).description('Nitro premium type')
            })
            .description('Discord User'),
    s = (e) =>
        e.object({
            type: e.number().valid(1).required(),
            components: e.array().max(5).items(o(e))
        }),
    o = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description('Text that appears on the button'),
            custom_id: e.string().max(100).description('Developer-defined identifier for the button; max 100 characters')
        });
