n.d(t, { e: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(240872),
    o = n(923500),
    s = n(247206),
    l = n(774863),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (
        ((0, s.aP)({
            action: s.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e,
        }),
        !l.Z.canSubmitFpReport(t))
    ) {
        a.Z.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS),
        }),
            o.Z.disableFalsePositiveButton(e, t);
        return;
    }
    (0, i.ZDy)(async () => {
        let { default: i } = await n(773276);
        return (n) =>
            (0, r.jsx)(
                i,
                d(
                    {
                        channelId: e,
                        messageId: t,
                    },
                    n,
                ),
            );
    });
}
