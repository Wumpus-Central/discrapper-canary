n(47120);
var i = n(200651),
    o = n(149765),
    r = n(481060),
    a = n(570140),
    l = n(700785);
__OVERLAY__ &&
    a.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: s, permissions: d, ...c }
            } = e,
            u = 'OAuth2Authorize_'.concat(t, '_').concat(c.guildId, '_').concat(c.channelId);
        function p(e) {
            let { location: n } = e;
            a.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let h = l.Hn;
        try {
            h = o.vB(null != d ? d : 0);
        } catch (e) {}
        (0, r.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...c,
                        authorizations: new Map(s),
                        permissions: h,
                        callback: p
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, r.closeModal)(u), p({});
                }
            }
        );
    });
