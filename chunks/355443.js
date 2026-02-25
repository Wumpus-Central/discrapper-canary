n.d(t, { H: () => l });
var i = n(179771),
    r = n(672162);
let l = {
        [r.vd.INITIATE_IMAGE_UPLOAD]: { request: void 0, response: (e) => ({ image_url: e.string().required() }) },
        [r.vd.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => ({ mediaUrl: e.string().required().max(1024) }),
        },
        [r.vd.AUTHENTICATE]: {
            request: (e) => ({ access_token: e.string().allow(null).optional() }),
            response: (e) => ({
                access_token: e.string().required(),
                user: e
                    .object({
                        username: e.string().required(),
                        discriminator: e.string().required(),
                        id: e.string().required(),
                        avatar: e.string().allow(null),
                        public_flags: e.number().required(),
                        global_name: e.string().allow(null),
                    })
                    .required(),
                scopes: e
                    .array()
                    .items(e.string().valid(...(0, r.iW)(i.F)))
                    .required(),
                expires: e.string().required(),
                application: e
                    .object({
                        description: e.string().required(),
                        icon: e.string().allow(null),
                        id: e.string().required(),
                        rpc_origins: e.array().items(e.string()).optional(),
                        name: e.string().required(),
                    })
                    .required(),
            }),
        },
        [r.vd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) => ({
                participants: e
                    .array()
                    .items(
                        s(e)
                            .keys({ nickname: e.string().description("Server nickname. Not unique.") })
                            .required(),
                    )
                    .required(),
            }),
        },
        [r.vd.SHARE_INTERACTION]: {
            request: (e) => ({
                command: e.string().required(),
                options: e.array().items(e.object({ name: e.string().required(), value: e.string().required() })),
                content: e.string().max(2e3),
                require_launch_channel: e.boolean(),
                preview_image: e.object({
                    height: e.number().required(),
                    url: e.string().required(),
                    width: e.number().required(),
                }),
                components: e.array().items(o(e)),
                pid: e.number(),
            }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [r.vd.SHARE_LINK]: {
            request: (e) => ({
                custom_id: e.string().max(64),
                message: e.string().max(1e3).required(),
                link_id: e.string().max(64),
            }),
            response: (e) => ({
                success: e.boolean().required(),
                didCopyLink: e.boolean().required(),
                didSendMessage: e.boolean().required(),
            }),
        },
        [r.vd.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) => ({
                relationships: e
                    .array()
                    .required()
                    .items(
                        e.object({
                            type: e.number().required(),
                            user: s(e).required(),
                            presence: e.object({ status: e.string().required(), activity: a(e).allow(null) }),
                        }),
                    ),
            }),
        },
        [r.vd.INVITE_USER_EMBEDDED]: {
            request: (e) => ({ user_id: e.string().required(), content: e.string().min(0).max(1024) }),
            response: void 0,
        },
        [r.vd.GET_USER]: { request: (e) => ({ id: e.string().max(64).required() }), response: (e) => s(e).allow(null) },
        [r.vd.GET_QUEST_ENROLLMENT_STATUS]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({
                quest_id: e.string().required(),
                is_enrolled: e.boolean().required(),
                enrolled_at: e.string().allow(null).optional(),
            }),
        },
        [r.vd.QUEST_START_TIMER]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [r.vd.REQUEST_PROXY_TICKET_REFRESH]: { request: void 0, response: (e) => ({ ticket: e.string().required() }) },
    },
    a = (e) =>
        e.object({
            session_id: e.string().optional(),
            type: e.number().optional(),
            name: e.string().required(),
            url: e.string().allow(null).optional(),
            application_id: e.string().optional(),
            status_display_type: e.number().optional(),
            state: e.string().optional(),
            state_url: e.string().optional(),
            details: e.string().optional(),
            details_url: e.string().optional(),
            emoji: e
                .object({
                    name: e.string().required(),
                    id: e.string().allow(null).optional(),
                    animated: e.bool().optional().allow(null),
                })
                .allow(null)
                .optional(),
            assets: e
                .object({
                    large_image: e.string().optional(),
                    large_text: e.string().optional(),
                    large_url: e.string().optional(),
                    small_image: e.string().optional(),
                    small_text: e.string().optional(),
                    small_url: e.string().optional(),
                })
                .optional(),
            timestamps: e.object({ start: e.number().optional(), end: e.number().optional() }).optional(),
            party: e
                .object({
                    id: e.string().optional(),
                    size: e.array().items(e.number()).length(2).optional(),
                    privacy: e.number().optional(),
                })
                .optional(),
            secrets: e.object({ match: e.string().optional(), join: e.string().optional() }).optional(),
            sync_id: e.string().optional(),
            created_at: e.number().optional(),
            instance: e.bool().optional(),
            flags: e.number().optional(),
            metadata: e.object().optional(),
            platform: e.string().optional(),
            supported_platforms: e.array().items(e.string()).optional(),
            buttons: e.array().items(e.string()).optional(),
            hangStatus: e.string().optional(),
        }),
    s = (e) =>
        e
            .object({
                id: e.string().required().description("User ID"),
                username: e.string().required(),
                global_name: e.string().allow(null).description("Global Discord name. Not unique."),
                discriminator: e
                    .string()
                    .required()
                    .description("Global name discriminator. Will be 0 if a unique username"),
                avatar: e.string().allow(null).description("User Avatar ID"),
                flags: e.number().required().description("Public user flags"),
                bot: e.bool().required().description("If a bot user."),
                avatar_decoration_data: e
                    .object({ asset: e.string().allow(null), skuId: e.string(), expiresAt: e.number() })
                    .allow(null)
                    .description("Details about avatar decoration"),
                premium_type: e.number().allow(null).description("Nitro premium type"),
            })
            .description("Discord User"),
    o = (e) => e.object({ type: e.number().valid(1).required(), components: e.array().max(5).items(d(e)) }),
    d = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description("Text that appears on the button"),
            custom_id: e
                .string()
                .max(100)
                .description("Developer-defined identifier for the button; max 100 characters"),
        });
