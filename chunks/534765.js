n.d(t, { r: () => o });
var i = n(627968),
    r = n(64700),
    a = n(442433),
    s = n(95701),
    l = n(652215);
function o(e) {
    let { channel: t, guild: o, user: d } = e;
    return r.useCallback(
        (e) => {
            if (null != t) {
                if (t.isMultiUserDM())
                    return void (0, a.L3)(e, async () => {
                        let { default: e } = await n.e("77927").then(n.bind(n, 320442));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1, widgetType: l.uss.TEXT_CHAT_V3 });
                    });
                if (t.isDM() && null != d)
                    return void (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("53635"),
                            n.e("42128"),
                            n.e("71259"),
                        ]).then(n.bind(n, 92016));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: d,
                                channel: t,
                                showModalItems: !1,
                                widgetType: l.uss.TEXT_CHAT_V3,
                            });
                    });
                if (t.isModeratorReportChannel())
                    return void (0, a.L3)(e, async () => {
                        let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: l.uss.TEXT_CHAT_V3 });
                    });
                if ((0, s.ay)(t.type)) {
                    if (null == o) return;
                    (0, a.L3)(e, async () => {
                        let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: o, widgetType: l.uss.TEXT_CHAT_V3 });
                    });
                    return;
                }
                null != o &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(n.bind(n, 813407));
                        return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: o, widgetType: l.uss.TEXT_CHAT_V3 });
                    });
            }
        },
        [t, o, d],
    );
}
