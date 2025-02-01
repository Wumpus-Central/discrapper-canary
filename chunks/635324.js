n(47120);
var i = n(200651),
    a = n(149765),
    o = n(481060),
    r = n(570140),
    s = n(700785);
__OVERLAY__ &&
    r.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: l, permissions: d, ...c }
            } = e,
            _ = 'OAuth2Authorize_'.concat(t, '_').concat(c.guildId, '_').concat(c.channelId);
        function u(e) {
            let { location: n } = e;
            r.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let h = s.Hn;
        try {
            h = a.vB(null != d ? d : 0);
        } catch (e) {}
        (0, o.ZDy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...c,
                        authorizations: new Map(l),
                        permissions: h,
                        callback: u
                    });
            },
            {
                modalKey: _,
                onCloseRequest: () => {
                    (0, o.Mr3)(_), u({});
                }
            }
        );
    });
