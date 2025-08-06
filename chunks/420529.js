n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(399606),
    o = n(481060),
    a = n(231757),
    s = n(397639),
    l = n(19780),
    c = n(979651),
    u = n(951206),
    d = n(446226),
    f = n(937393),
    _ = n(721351),
    p = n(981631),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = "Console Transfer Item";
function O(e, t) {
    return e === p.ABu.XBOX
        ? t
            ? h.intl.string(h.t["qVE/VF"])
            : h.intl.string(h.t.E8euSk)
        : e === p.ABu.PLAYSTATION
          ? t
              ? h.intl.string(h.t.vzfxmZ)
              : h.intl.string(h.t.QxEYDg)
          : e === p.ABu.PLAYSTATION_STAGING
            ? t
                ? h.intl.string(h.t.BDiXtb)
                : h.intl.string(h.t["bhdB9/"])
            : void 0;
}
function v(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getChannelId() === e.id),
        m = (0, d.Z)(),
        E = (null == m ? void 0 : m.channelId) === e.id,
        v = (0, s.V)(e) && !e.isPrivate(),
        I = (0, s.Z)(e),
        T = (!(0, i.e7)([c.Z], () => c.Z.isInChannel(e.id)) && I) || v,
        S = (0, f.Z)();
    if (!E && 0 === S.length) return null;
    let A = (t) => {
        if (!t.twoWayLink || t.revoked)
            return void (0, a.Z)({
                platformType: t.type,
                location: y,
            });
        t.type === p.ABu.XBOX
            ? (0, o.ZDy)(async () => {
                  let { default: t } = await Promise.all([n.e("68214"), n.e("522")]).then(n.bind(n, 200623));
                  return (n) => (0, r.jsx)(t, b(g({}, n), { channel: e }));
              })
            : (t.type === p.ABu.PLAYSTATION || t.type === p.ABu.PLAYSTATION_STAGING) &&
              (0, o.ZDy)(async () => {
                  let { default: i } = await n.e("638").then(n.bind(n, 543974));
                  return (n) =>
                      (0, r.jsx)(
                          i,
                          b(g({}, n), {
                              platform: t.type,
                              channel: e,
                          }),
                      );
              });
    };
    return E
        ? (0, r.jsx)(o.sNh, {
              label: h.intl.string(h.t.PlwgdX),
              id: "handoff",
              action: () => {
                  (0, u.F)(m);
              },
              icon: (0, _.Z)(void 0),
              disabled: T,
          })
        : S.map((e) =>
              (0, r.jsx)(
                  o.sNh,
                  {
                      id: "transfer-".concat(e.type, "-").concat(e.id),
                      label: O(e.type, t),
                      action: () => A(e),
                      icon: (0, _.Z)(e.type),
                      disabled: T,
                  },
                  e.id,
              ),
          );
}
