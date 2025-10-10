n.d(t, { Z: () => O }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(243814),
    s = n(442837),
    c = n(907862),
    d = n(481060),
    u = n(367907),
    p = n(213459),
    m = n(488915),
    b = n(598077),
    g = n(626135),
    f = n(486199),
    h = n(929507),
    x = n(981631),
    j = n(388032),
    v = n(473059);
function O(e) {
    var t, n, l;
    let {
            name: O,
            icon: y,
            imageSrc: _,
            iconBackgroundColor: C,
            iconClassName: N,
            iconWrapperClassName: S,
            details: w,
            integration: P,
            buttonText: I,
            buttonDisabled: E,
            hasNextSection: Z,
            onButtonClick: T,
            guildId: k,
            isScrolling: A,
            canShowMigrationTooltip: D,
            trailing: R,
        } = e,
        [L, M] = r.useState(!1),
        U = D && !A && !L && void 0 !== k && null != P,
        B = r.useRef(null),
        W = r.useRef(null),
        H =
            null == I || null == T
                ? null
                : Z
                  ? (0, i.jsxs)(d.Kqy, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: W,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: I,
                            }),
                            Z
                                ? (0, i.jsx)(d.Fbu, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 10,
                                      height: 10,
                                      className: v.caret,
                                  })
                                : null,
                        ],
                    })
                  : (0, i.jsx)(d.zxk, {
                        size: "sm",
                        buttonRef: B,
                        disabled: E,
                        onClick: T,
                        text: I,
                    });
    r.useEffect(() => {
        var e, t;
        U &&
            g.default.track(
                x.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, (0, u.hH)(k))),
                (t = t =
                    {
                        application_id: null == P ? void 0 : P.application.id,
                        location: "overview",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
    }, [k, null == P ? void 0 : P.application.id, U]);
    let G =
            U && (null != W.current || null != B.current)
                ? (0, i.jsx)(c.J2, {
                      targetElementRef: Z ? W : B,
                      title: j.intl.string(j.t.ufFDiI),
                      body: j.intl.string(j.t.TyMJwM),
                      onRequestClose: () => {
                          M(!0), h.Z.dismissOverviewTooltip(k, P.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        z = (0, s.Wu)([m.Z], () => {
            var e;
            return null != P && null != k && null != (e = m.Z.getApplicationEntitlementsForGuild(P.application.id, k))
                ? e
                : [];
        }),
        F = (0, p.LD)(k, !0),
        K =
            (null == P ? void 0 : P.application) != null &&
            Object.keys(
                null != (l = null == (n = F.result) || null == (t = n.sections[P.application.id]) ? void 0 : t.commands)
                    ? l
                    : {},
            ).length > 0,
        q = (0, i.jsxs)(d.Kqy, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(f.Z, {
                    name: O,
                    icon: y,
                    imageSrc: _,
                    iconBackgroundColor: C,
                    iconClassName: N,
                    iconWrapperClassName: S,
                    details: w,
                    isPremium: z.length > 0,
                    children: (function (e, t) {
                        var n, r;
                        if (null == e) return null;
                        let l = [],
                            { application: a, integration: s, webhooks: c } = e;
                        return (
                            null != a.bot &&
                                (null == s || null == (n = s.scopes) ? void 0 : n.includes(o.x.BOT)) &&
                                l.push({
                                    id: "bot",
                                    label: new b.Z(a.bot).isVerifiedBot()
                                        ? j.intl.string(j.t.xxcTGx)
                                        : j.intl.string(j.t.AOdOYm),
                                    icon: d.wGt,
                                }),
                            c.length > 0 &&
                                l.push({
                                    id: "webhooks",
                                    label: j.intl.formatToPlainString(j.t["6HqDfX"], { count: c.length }),
                                    icon: d.tYf,
                                }),
                            (null == s || null == (r = s.scopes) ? void 0 : r.includes(o.x.APPLICATIONS_COMMANDS)) ===
                                !0 &&
                                t &&
                                l.push({
                                    id: "commands",
                                    label: j.intl.string(j.t["0hKkS0"]),
                                    icon: d.SsZ,
                                }),
                            (0, i.jsx)(d.Kqy, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, i.jsx)(d.QSK, {
                                    label: j.intl.string(j.t.G8u3JS),
                                    layout: "inline",
                                    items: l,
                                }),
                            })
                        );
                    })(P, K),
                }),
                G,
                H,
                R,
            ],
        });
    return Z
        ? (0, i.jsx)(d.P3F, {
              onClick: () => {
                  D && null != k && null != P && h.Z.dismissOverviewTooltip(k, P.integration), null == T || T();
              },
              children: (0, i.jsx)(d.Zbd, {
                  editable: !0,
                  className: a()(v.card, v.clickable),
                  children: q,
              }),
          })
        : (0, i.jsx)(d.Zbd, {
              editable: !0,
              className: v.card,
              children: q,
          });
}
