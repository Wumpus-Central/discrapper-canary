n.d(t, { default: () => L }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(512722),
    l = n.n(i),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    f = n(749210),
    d = n(600164),
    h = n(313201),
    _ = n(592125),
    m = n(944486),
    b = n(594174),
    x = n(626135),
    N = n(63063),
    E = n(771308),
    g = n(758119),
    y = n(13430),
    k = n(723359),
    A = n(981631),
    C = n(388032),
    R = n(726286);
function L(e) {
    let { transitionState: t, source: i } = e,
        o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        L = (0, c.e7)([m.Z, _.Z], () => _.Z.getChannel(m.Z.getChannelId())),
        [j, v] = a.useState(null),
        [z, T] = a.useState(null),
        [p, M] = a.useState(!1),
        [S, W] = a.useState(0),
        w = a.createRef(),
        G = a.createRef(),
        I = (0, h.Dt)(),
        D = null != j ? s()().diff(j, 'years') : null;
    function Z() {
        if (i === k.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, g.qV)(i);
            return;
        }
        let e = null == L ? void 0 : L.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, g.qV)(i);
    }
    async function Y() {
        l()(null != j, 'Cannot submit null birthday.');
        try {
            return T(null), M(!0), await (0, E.Av)(j, i);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, g.C8)(i, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? T(C.NW.string(C.t['TGg/2t'])) : T(null == t ? void 0 : t.body.message), M(!1);
            }
        }
    }
    async function F() {
        if ((l()(null != D, "Cannot submit if we haven't been able to calculate age."), D < 18)) {
            W(1);
            return;
        }
        await Y();
    }
    async function B(e) {
        e.preventDefault(), p || null == j || (await F());
    }
    async function U() {
        null == (await Y()) && W(0);
    }
    a.useEffect(() => {
        null != o && null != o.nsfwAllowed && (0, g.qq)(i);
    }),
        a.useEffect(() => {
            x.default.track(A.rMx.AGE_GATE_ACTION, {
                source: i,
                action: k.Al.AGE_GATE_OPEN
            });
        }, [i]);
    let P = a.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        q = a.useCallback(() => {
            var e;
            null === (e = G.current) || void 0 === e || e.focus();
        }, [G]);
    return 0 === S
        ? (function () {
              let e = i === k.L0.FAMILY_CENTER ? C.NW.string(C.t.M7mt7u) : C.NW.string(C.t.F8otRk),
                  a = (() => {
                      switch (i) {
                          case k.L0.FAMILY_CENTER:
                              return C.NW.string(C.t.mhUrKS);
                          case k.L0.DEEP_LINK_PROMPT:
                              return C.NW.format(C.t.iyhg2t, { helpURL: N.Z.getArticleURL(A.BhN.AGE_GATE) });
                          default:
                              return C.NW.format(C.t.n3QjDA, { helpURL: N.Z.getArticleURL(A.BhN.AGE_GATE) });
                      }
                  })();
              return (0, r.jsxs)(u.Y0X, {
                  transitionState: t,
                  size: u.CgR.SMALL,
                  'aria-labelledby': I,
                  children: [
                      (0, r.jsxs)(u.hzk, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: R.container,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: n(462991),
                                          className: R.img
                                      }),
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-xl/semibold',
                                          className: R.title,
                                          id: I,
                                          children: e
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: a
                                      })
                                  ]
                              }),
                              (0, r.jsx)('form', {
                                  onSubmit: B,
                                  children: (0, r.jsx)(y.Z, {
                                      label: C.NW.string(C.t.rhBeKS),
                                      wrapperClassName: R.birthday,
                                      name: 'date_of_birth',
                                      onChange: P,
                                      onPopulated: q,
                                      error: z,
                                      value: j,
                                      ref: w,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(u.mzw, {
                          justify: d.Z.Justify.BETWEEN,
                          children: [
                              (0, r.jsx)(u.zxk, {
                                  buttonRef: G,
                                  submitting: p,
                                  disabled: null == j,
                                  size: u.PhG.SMALL,
                                  onClick: F,
                                  children: C.NW.string(C.t.uBFuoq)
                              }),
                              (0, r.jsx)(u.zxk, {
                                  look: u.zxk.Looks.LINK,
                                  size: u.zxk.Sizes.NONE,
                                  color: u.zxk.Colors.PRIMARY,
                                  onClick: Z,
                                  children: C.NW.string(C.t['1MrpWF'])
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, r.jsxs)(u.Y0X, {
              transitionState: u.Dvm.ENTERED,
              size: u.CgR.SMALL,
              'aria-labelledby': I,
              children: [
                  (0, r.jsx)(u.hzk, {
                      children: (0, r.jsxs)('div', {
                          className: R.confirmContainer,
                          children: [
                              (0, r.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: R.confirmTitle,
                                  id: I,
                                  children: C.NW.format(C.t.wumolZ, { age: D })
                              }),
                              (0, r.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: C.NW.format(C.t.n3QjDA, { helpURL: N.Z.getArticleURL(A.BhN.AGE_GATE) })
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(u.mzw, {
                      className: R.confirmFooter,
                      children: [
                          (0, r.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: () => W(0),
                              children: C.NW.string(C.t.cfYCra)
                          }),
                          (0, r.jsx)(u.zxk, {
                              color: u.zxk.Colors.BRAND,
                              onClick: U,
                              children: C.NW.string(C.t['6tahio'])
                          })
                      ]
                  })
              ]
          });
}
