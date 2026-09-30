a.d(t, { A: () => c });
var n = a(477900);
a(582128);
var s = a(866665),
    i = a(821609),
    r = a(721157),
    l = a(555393),
    o = a(375708);
function c(e) {
    let t = (0, l.N)(),
        a =
            (t?.reason ?? null) === r.ON.TRIAL_USER_NOT_ELIGIBLE
                ? o.intl.string(o.t["2S/5mX"])
                : o.intl.string(o.t.GcPSts);
    return t?.state === r.zE.BLOCK_CLAIM
        ? (0, n.jsx)(s.m, {
              text: a,
              asContainer: !0,
              children: (0, n.jsx)(i.$, {
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: o.intl.string(o.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, n.jsx)(i.$, { ...e });
}
