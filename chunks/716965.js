var i = n(323125),
    r = n(620632),
    a = n(830215),
    s = n(734057),
    l = n(309010),
    o = n(652215);
n.d(
    t,
    {},
    {
        $Q: async function (e) {
            let { body: t } = await r.Bo.get({
                url: o.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                query: { guild_id: e },
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            });
            return t;
        },
        Gq: async function (e) {
            let t,
                n,
                {
                    authorize: i,
                    clientId: a,
                    scopes: d,
                    responseType: c,
                    redirectUri: u,
                    codeChallenge: _,
                    codeChallengeMethod: E,
                    state: A,
                    permissions: h,
                    guildId: f,
                    channelId: I,
                    integrationType: p,
                    connectedAccountProvider: m,
                    nonce: T,
                } = e;
            return (
                await r.Bo.post({
                    url: o.Rsh.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: a,
                        response_type: c,
                        redirect_uri: u,
                        code_challenge: _,
                        code_challenge_method: E,
                        scope: d.join(" "),
                        state: A,
                        nonce: T,
                    },
                    body: {
                        guild_id: f,
                        webhook_channel_id: null != f && null != I ? I : void 0,
                        channel_id: null == f && null != I ? I : void 0,
                        permissions: h,
                        authorize: i,
                        integration_type: p,
                        connected_account_provider: m,
                        location_context:
                            ((t = l.Ay.getChannelId()),
                            (n = s.A.getBasicChannel(t)),
                            {
                                guild_id: n?.guild_id ?? "10000",
                                channel_id: n?.id ?? "10000",
                                channel_type: n?.type ?? o.rbe.UNKNOWN,
                            }),
                    },
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                })
            ).body;
        },
        IN: async function (e, t) {
            return await r.Bo.post({
                url: o.Rsh.OAUTH2_DEVICE_FINISH,
                body: { user_code: e, result: t },
                rejectWithError: (0, r.fT)(),
            });
        },
        Kf: function (e) {
            return r.Bo.post({
                url: o.Rsh.OAUTH2_WHITELIST_ACCEPT,
                query: { token: e },
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            });
        },
        Vh: function (e, t) {
            a.A.logout(t, (0, i.T2)(e.pathname + e.search, !1));
        },
        cG: async function (e) {
            return await r.Bo.post({
                url: o.Rsh.OAUTH2_DEVICE_VERIFY,
                body: { user_code: e },
                rejectWithError: (0, r.fT)(),
            });
        },
        qY: async function (e) {
            let {
                clientId: t,
                scopes: n,
                responseType: i,
                redirectUri: a,
                codeChallenge: s,
                codeChallengeMethod: l,
                state: d,
                integrationType: c,
                connectedAccountProvider: u,
                nonce: _,
                signal: E,
            } = e;
            return (
                await r.Bo.get({
                    url: o.Rsh.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: t,
                        response_type: i,
                        redirect_uri: a,
                        code_challenge: s,
                        code_challenge_method: l,
                        scope: n.join(" "),
                        state: d,
                        integration_type: c,
                        connected_account_provider: u,
                        nonce: _,
                    },
                    signal: E,
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                })
            ).body;
        },
        zf: async function (e, t, n) {
            return await r.Bo.post({
                url: o.Rsh.OAUTH2_DEVICE_FINISH,
                body: { user_code: e, result: "two_way_link_error", error_code: t, error_source: n },
                rejectWithError: (0, r.fT)(),
            });
        },
    },
);
