n.d(t, { default: () => L }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
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
    E = n(63063),
    g = n(771308),
    y = n(758119),
    k = n(13430),
    A = n(723359),
    C = n(981631),
    N = n(388032),
    R = n(40599);
function L(e) {
    let { transitionState: t, source: l } = e,
        o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        L = (0, c.e7)([m.Z, _.Z], () => _.Z.getChannel(m.Z.getChannelId())),
        [j, v] = i.useState(null),
        [z, T] = i.useState(null),
        [p, M] = i.useState(!1),
        [S, w] = i.useState(0),
        G = i.createRef(),
        I = i.createRef(),
        D = (0, h.Dt)(),
        Z = null != j ? s()().diff(j, 'years') : null;
    function Y() {
        if (l === A.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, y.qV)(l);
            return;
        }
        let e = null == L ? void 0 : L.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, y.qV)(l);
    }
    async function F() {
        a()(null != j, 'Cannot submit null birthday.');
        try {
            return T(null), M(!0), await (0, g.Av)(j, l);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, y.C8)(l, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? T(N.intl.string(N.t['TGg/2t'])) : T(null == t ? void 0 : t.body.message), M(!1);
            }
        }
    }
    async function B() {
        if ((a()(null != Z, "Cannot submit if we haven't been able to calculate age."), Z < 18)) {
            w(1);
            return;
        }
        await F();
    }
    async function U(e) {
        e.preventDefault(), p || null == j || (await B());
    }
    async function P() {
        null == (await F()) && w(0);
    }
    i.useEffect(() => {
        null != o && null != o.nsfwAllowed && (0, y.qq)(l);
    }),
        i.useEffect(() => {
            x.default.track(C.rMx.AGE_GATE_ACTION, {
                source: l,
                action: A.Al.AGE_GATE_OPEN
            });
        }, [l]);
    let q = i.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        K = i.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }, [I]);
    return 0 === S
        ? (function () {
              let e = l === A.L0.FAMILY_CENTER ? N.intl.string(N.t.M7mt7u) : N.intl.string(N.t.F8otRk),
                  i = (() => {
                      switch (l) {
                          case A.L0.FAMILY_CENTER:
                              return N.intl.string(N.t.mhUrKS);
                          case A.L0.DEEP_LINK_PROMPT:
                              return N.intl.format(N.t.iyhg2t, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) });
                          default:
                              return N.intl.format(N.t.n3QjDA, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) });
                      }
                  })();
              return (0, r.jsxs)(u.Y0X, {
                  transitionState: t,
                  size: u.CgR.SMALL,
                  'aria-labelledby': D,
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
                                          id: D,
                                          children: e
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: i
                                      })
                                  ]
                              }),
                              (0, r.jsx)('form', {
                                  onSubmit: U,
                                  children: (0, r.jsx)(k.Z, {
                                      label: N.intl.string(N.t.rhBeKS),
                                      wrapperClassName: R.birthday,
                                      name: 'date_of_birth',
                                      onChange: q,
                                      onPopulated: K,
                                      error: z,
                                      value: j,
                                      ref: G,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(u.mzw, {
                          justify: d.Z.Justify.BETWEEN,
                          children: [
                              (0, r.jsx)(u.zxk, {
                                  buttonRef: I,
                                  submitting: p,
                                  disabled: null == j,
                                  size: u.PhG.SMALL,
                                  onClick: B,
                                  children: N.intl.string(N.t.uBFuoq)
                              }),
                              (0, r.jsx)(u.zxk, {
                                  look: u.zxk.Looks.LINK,
                                  size: u.zxk.Sizes.NONE,
                                  color: u.zxk.Colors.PRIMARY,
                                  onClick: Y,
                                  children: N.intl.string(N.t['1MrpWF'])
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, r.jsxs)(u.Y0X, {
              transitionState: u.Dvm.ENTERED,
              size: u.CgR.SMALL,
              'aria-labelledby': D,
              children: [
                  (0, r.jsx)(u.hzk, {
                      children: (0, r.jsxs)('div', {
                          className: R.confirmContainer,
                          children: [
                              (0, r.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: R.confirmTitle,
                                  id: D,
                                  children: N.intl.format(N.t.wumolZ, { age: Z })
                              }),
                              (0, r.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: N.intl.format(N.t.n3QjDA, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) })
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
                              onClick: () => w(0),
                              children: N.intl.string(N.t.cfYCra)
                          }),
                          (0, r.jsx)(u.zxk, {
                              color: u.zxk.Colors.BRAND,
                              onClick: P,
                              children: N.intl.string(N.t['6tahio'])
                          })
                      ]
                  })
              ]
          });
}
