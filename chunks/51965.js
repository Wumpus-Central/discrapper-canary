i.d(t, { A: () => d });
var s = i(477900);
i(582128);
var n = i(866665),
    r = i(821609),
    a = i(721157),
    l = i(815987),
    o = i(375708);
function d(e) {
    let t = (0, l.N)(),
        i =
            (t?.reason ?? null) === a.ON.TRIAL_USER_NOT_ELIGIBLE
                ? o.intl.string(o.t["2S/5mX"])
                : o.intl.string(o.t.GcPSts);
    return t?.state === a.zE.BLOCK_CLAIM
        ? (0, s.jsx)(n.m, {
              text: i,
              asContainer: !0,
              children: (0, s.jsx)(r.$, {
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: o.intl.string(o.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, s.jsx)(r.$, { ...e });
}
