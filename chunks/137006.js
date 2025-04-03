n.d(t, { m: () => l }), n(47120), n(266796);
var r = n(243814),
    i = n(103964);
let l = {
        [i.Q5.INITIATE_IMAGE_UPLOAD]: {
            request: void 0,
            response: (e) => e.object({ image_url: e.string().required() })
        },
        [i.Q5.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => (0, i.C5)(e.object({ mediaUrl: e.string().required().max(1024) }))
        },
        [i.Q5.AUTHENTICATE]: {
            request: (e) => (0, i.C5)(e.object({ access_token: e.string().allow(null).optional() })),
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
                        .items(e.string().valid(...(0, i.no)(r.x)))
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
        [i.Q5.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) =>
                e
                    .object({
                        participants: e
                            .array()
                            .items(
                                o(e)
                                    .keys({ nickname: e.string().description('Server nickname. Not unique.') })
                                    .required()
                            )
                            .required()
                    })
                    .required()
        },
        [i.Q5.SHARE_INTERACTION]: {
            request: (e) =>
                (0, i.C5)(
                    e.object({
                        command: e.string().required(),
                        content: e.string().max(2000),
                        require_launch_channel: e.boolean(),
                        preview_image: e.object({
                            height: e.number().required(),
                            url: e.string().required(),
                            width: e.number().required()
                        }),
                        components: e.array().items(s(e))
                    })
                ),
            response: (e) => e.object({ success: e.boolean().required() })
        },
        [i.Q5.SHARE_LINK]: {
            request: (e) =>
                (0, i.C5)(
                    e.object({
                        custom_id: e.string().max(64),
                        message: e.string().max(1000).required(),
                        link_id: e.string().max(64)
                    })
                ),
            response: (e) =>
                e.object({
                    success: e.boolean().required(),
                    didCopyLink: e.boolean().required(),
                    didSendMessage: e.boolean().required()
                })
        },
        [i.Q5.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) =>
                e.object({
                    relationships: e
                        .array()
                        .required()
                        .items(
                            e.object({
                                type: e.number().required(),
                                user: o(e).required(),
                                presence: e.object({
                                    status: e.string().required(),
                                    activity: a(e).allow(null)
                                })
                            })
                        )
                })
        },
        [i.Q5.INVITE_USER_EMBEDDED]: {
            request: (e) =>
                e
                    .object({
                        user_id: e.string().required(),
                        content: e.string().min(0).max(1024)
                    })
                    .required(),
            response: void 0
        },
        [i.Q5.GET_USER]: {
            request: (e) => (0, i.C5)(e.object({ id: e.string().max(64).required() })),
            response: (e) => o(e).allow(null)
        }
    },
    a = (e) =>
        e.object({
            session_id: e.string().optional(),
            type: e.number().optional(),
            name: e.string().required(),
            url: e.string().allow(null).optional(),
            application_id: e.string().optional(),
            state: e.string().optional(),
            details: e.string().optional(),
            emoji: e
                .object({
                    name: e.string().required(),
                    id: e.string().allow(null).optional(),
                    animated: e.bool().optional().allow(null)
                })
                .allow(null)
                .optional(),
            assets: e
                .object({
                    large_image: e.string().optional(),
                    large_text: e.string().optional(),
                    small_image: e.string().optional(),
                    small_text: e.string().optional()
                })
                .optional(),
            timestamps: e
                .object({
                    start: e.number().optional(),
                    end: e.number().optional()
                })
                .optional(),
            party: e
                .object({
                    id: e.string().optional(),
                    size: e.array().items(e.number()).length(2).optional(),
                    privacy: e.number().optional()
                })
                .optional(),
            secrets: e
                .object({
                    match: e.string().optional(),
                    join: e.string().optional()
                })
                .optional(),
            sync_id: e.string().optional(),
            created_at: e.number().optional(),
            instance: e.bool().optional(),
            flags: e.number().optional(),
            metadata: e.object().optional(),
            platform: e.string().optional(),
            supported_platforms: e.array().items(e.string()).optional(),
            buttons: e.array().items(e.string()).optional(),
            hangStatus: e.string().optional()
        }),
    o = (e) =>
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
                        skuId: e.string(),
                        expiresAt: e.number()
                    })
                    .allow(null)
                    .description('Details about avatar decoration'),
                premium_type: e.number().allow(null).description('Nitro premium type')
            })
            .description('Discord User'),
    s = (e) =>
        e.object({
            type: e.number().valid(1).required(),
            components: e.array().max(5).items(c(e))
        }),
    c = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description('Text that appears on the button'),
            custom_id: e.string().max(100).description('Developer-defined identifier for the button; max 100 characters')
        });
