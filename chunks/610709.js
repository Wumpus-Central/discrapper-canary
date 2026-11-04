(n.d(t, { ZP: () => N, fx: () => D, jM: () => _ }), n(321073));
var r = n(477900);
n(582128);
var s = n(503698),
    i = n.n(s),
    a = n(855986),
    c = n(192308),
    l = n(778712),
    d = n(97808),
    o = n(251843),
    u = n(590251),
    h = n(775602),
    f = n(607470),
    m = n(854627),
    b = n(129230),
    p = n(427262),
    A = n(197630);
(n(132506), n(664654), n(303682));
var R = n(652215);
n(792996);
var S = n(162907);
let x =
    "https://cdn.discordapp.com/assets/content/a140b0391b893795b626ab338fafbad6be38861a5cce6cec878b05d0d21a9022.png";
var v = n(488116);
let g =
    "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var E = n(764014),
    O = n(484252),
    k = n(544879);
function _(e) {
    let { startingScreen: t, analyticsLocations: s } = e;
    (b.default.track(R.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
        (0, c.mM)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
        }));
}
function j(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: s } = (0, m.A)({ userId: t.id, size: l._3.SIZE_24 });
    return (0, r.jsx)(d.eu, { className: S.bj, src: n, "aria-label": (0, p.mG)(t), size: l._3.SIZE_24, ...s }, t.id);
}
function w(e) {
    let { slotIndex: t } = e;
    return (0, r.jsx)("div", { className: S.p, children: t });
}
function N(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: i()(S.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < 3; n++)
                if (t?.[n] !== void 0) {
                    let s = (0, r.jsx)(j, { user: t[n] }, t[n].id);
                    e.push(s);
                } else {
                    let t = (0, r.jsx)(w, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let C = { width: 200, height: 160 },
    I = { width: 100, height: 60 },
    B = { width: 60, height: 40 };
function D(e) {
    let {
            nReferralsSent: t,
            imageSize: n = 93,
            backgroundClassName: s,
            ringClassName: i,
            referralRewardType: c = null,
            useAltReferralCardArt: l = !1,
        } = e,
        d = (0, a.bG)([h.Ay], () => h.Ay.useReducedMotion),
        {
            src: m,
            srcSet: b,
            dimensions: p,
        } = l
            ? c === A.xb.ORBS
                ? { src: g, srcSet: `${g} 1x, ${E.A} 2x`, dimensions: d ? I : C }
                : c === A.xb.DISCOUNT
                  ? { src: x, srcSet: `${x} 1x, ${v.A} 2x`, dimensions: B }
                  : { src: k.A, srcSet: void 0, dimensions: null }
            : { src: k.A, srcSet: void 0, dimensions: null },
        R = p?.width ?? n,
        _ = p?.height ?? n;
    return (0, r.jsx)(u.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: s ?? S.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: i ?? S.e0,
        overlayClassName: 3 === t ? S.ys : void 0,
        children:
            c === A.xb.ORBS && l && !d
                ? (0, r.jsx)(f.A, {
                      className: S.HF,
                      width: R,
                      height: _,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      controls: !1,
                      children: (0, r.jsx)("source", { src: O.A, type: "video/webm" }),
                  })
                : null != b
                  ? (0, r.jsx)("img", { src: m, srcSet: b, alt: "", role: "presentation", width: R, height: _ })
                  : (0, r.jsx)(o._, { src: m, height: _, width: R, zoomable: !1 }),
    });
}
