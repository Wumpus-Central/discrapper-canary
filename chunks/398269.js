n.d(t, { f: () => f }), n(415506);
var r = n(951288);
n(647438);
var i = n(608787),
    a = n(765250),
    o = n(788983),
    s = n(355863),
    l = n(837268),
    c = n(32300),
    u = n(757744),
    d = n(501787);
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.R5.UNSET,
        t = {
            outOfProcessOverlay: !0,
            focusable: !1,
        },
        f = (0, c.Rb)("openOverlayPopout").overlayV3UI;
    if (!f && e === l.R5.UNSET) return;
    let _ = e === l.R5.OUT_OF_PROCESS_V3 || e === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        p = (e) => null;
    if (f || _) {
        let e = (0, i.Un)({
            createPromise: () =>
                Promise.all([
                    n.e("35535"),
                    n.e("90508"),
                    n.e("70205"),
                    n.e("39206"),
                    n.e("37832"),
                    n.e("84927"),
                    n.e("92922"),
                    n.e("46290"),
                    n.e("29709"),
                    n.e("55196"),
                    n.e("13368"),
                ]).then(n.bind(n, 989373)),
            webpackId: 989373,
            name: "AppOverlay",
        });
        (p = (t) =>
            (0, r.jsx)(e, {
                withTitleBar: !1,
                windowKey: t,
            })),
            (0, a.te)(u.$S, s.Z.getDefaultLayout(u.$S, u.HN), u.HN);
    } else throw Error("OverlayV3Utils: No overlay rendering mode found");
    await o.bA(d.$J, p, t);
}
