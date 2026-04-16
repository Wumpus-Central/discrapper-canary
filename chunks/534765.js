n.d(t, { r: () => o });
var i = n(627968),
    l = n(64700),
    r = n(442433),
    s = n(95701),
    a = n(652215);
function o(e) {
    let { channel: t, guild: o, user: u } = e;
    return l.useCallback(
        (e) => {
            if (null != t) {
                if (t.isMultiUserDM())
                    return void (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("77927").then(n.bind(n, 320442));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1, widgetType: a.uss.TEXT_CHAT_V3 });
                    });
                if (t.isDM() && null != u)
                    return void (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("28059")]).then(
                            n.bind(n, 92016),
                        );
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: u,
                                channel: t,
                                showModalItems: !1,
                                widgetType: a.uss.TEXT_CHAT_V3,
                            });
                    });
                if (t.isModeratorReportChannel())
                    return void (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: a.uss.TEXT_CHAT_V3 });
                    });
                if ((0, s.ay)(t.type)) {
                    if (null == o) return;
                    (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: o, widgetType: a.uss.TEXT_CHAT_V3 });
                    });
                    return;
                }
                null != o &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(n.bind(n, 813407));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: o, widgetType: a.uss.TEXT_CHAT_V3 });
                    });
            }
        },
        [t, o, u],
    );
}
