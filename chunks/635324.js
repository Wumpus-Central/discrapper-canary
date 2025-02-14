n(47120);
var i = n(200651),
    r = n(149765),
    a = n(481060),
    o = n(570140),
    s = n(700785);
__OVERLAY__ &&
    o.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: d, permissions: l, ...c }
            } = e,
            u = 'OAuth2Authorize_'.concat(t, '_').concat(c.guildId, '_').concat(c.channelId);
        function _(e) {
            let { location: n } = e;
            o.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let f = s.Hn;
        try {
            f = r.vB(null != l ? l : 0);
        } catch (e) {}
        (0, a.ZDy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...c,
                        authorizations: new Map(d),
                        permissions: f,
                        callback: _
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, a.Mr3)(u), _({});
                }
            }
        );
    });
