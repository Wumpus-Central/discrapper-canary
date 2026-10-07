(n.d(t, { jM: () => j, ZP: () => C, fx: () => z }), n(321073));
var r = n(477900);
n(582128);
var s = n(503698),
    i = n.n(s),
    a = n(17928),
    l = n(192308),
    c = n(778712),
    d = n(97808),
    o = n(144165),
    u = n(590251),
    h = n(775602),
    f = n(607470),
    m = n(854627),
    b = n(174459),
    p = n(427262),
    A = n(197630);
n(557284);
var R = n(664654);
n(303682);
var S = n(652215);
n(660183);
var x = n(162907);
let v =
    "https://cdn.discordapp.com/assets/content/a140b0391b893795b626ab338fafbad6be38861a5cce6cec878b05d0d21a9022.png";
var g = n(488116);
let E =
    "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var O = n(764014),
    k = n(484252),
    _ = n(544879);
function j(e) {
    let { startingScreen: t, analyticsLocations: s } = e;
    (b.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
        }));
}
function w(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: s } = (0, m.A)({ userId: t.id, size: c._3.SIZE_24 });
    return (0, r.jsx)(d.eu, { className: x.bj, src: n, "aria-label": (0, p.mG)(t), size: c._3.SIZE_24, ...s }, t.id);
}
function N(e) {
    let { slotIndex: t } = e;
    return (0, r.jsx)("div", { className: x.p, children: t });
}
function C(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: i()(x.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < R.Z; n++)
                if (t?.[n] !== void 0) {
                    let s = (0, r.jsx)(w, { user: t[n] }, t[n].id);
                    e.push(s);
                } else {
                    let t = (0, r.jsx)(N, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let Z = { width: 200, height: 160 },
    I = { width: 100, height: 60 },
    y = { width: 60, height: 40 };
function z(e) {
    let {
            nReferralsSent: t,
            imageSize: n = 93,
            backgroundClassName: s,
            ringClassName: i,
            referralRewardType: l = null,
            useAltReferralCardArt: c = !1,
        } = e,
        d = (0, a.bG)([h.Ay], () => h.Ay.useReducedMotion),
        {
            src: m,
            srcSet: b,
            dimensions: p,
        } = c
            ? l === A.xb.ORBS
                ? { src: E, srcSet: `${E} 1x, ${O.A} 2x`, dimensions: d ? I : Z }
                : l === A.xb.DISCOUNT
                  ? { src: v, srcSet: `${v} 1x, ${g.A} 2x`, dimensions: y }
                  : { src: _.A, srcSet: void 0, dimensions: null }
            : { src: _.A, srcSet: void 0, dimensions: null },
        S = p?.width ?? n,
        j = p?.height ?? n;
    return (0, r.jsx)(u.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: s ?? x.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: i ?? x.e0,
        overlayClassName: t === R.Z ? x.ys : void 0,
        children:
            l === A.xb.ORBS && c && !d
                ? (0, r.jsx)(f.A, {
                      className: x.HF,
                      width: S,
                      height: j,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      controls: !1,
                      children: (0, r.jsx)("source", { src: k.A, type: "video/webm" }),
                  })
                : null != b
                  ? (0, r.jsx)("img", { src: m, srcSet: b, alt: "", role: "presentation", width: S, height: j })
                  : (0, r.jsx)(o._, { src: m, height: j, width: S, zoomable: !1 }),
    });
}
