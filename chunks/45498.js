s.d(t, { P: () => r });
var n = s(627968),
    l = s(417098),
    a = s(985018);
let r = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(l.$T, {
        color: l.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : a.intl.string(a.t.ZErSg5) }),
    });
};
