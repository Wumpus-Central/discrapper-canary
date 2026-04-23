n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(179771),
    o = n(311907),
    d = n(265486),
    c = n(430392),
    u = n(39619),
    m = n(633018),
    g = n(331322),
    h = n(866711),
    x = n(834730),
    p = n(320448),
    A = n(821609),
    b = n(939249),
    f = n(359778),
    _ = n(58149),
    j = n(264322),
    N = n(607940),
    v = n(427157),
    E = n(954571),
    C = n(447066),
    I = n(320426),
    T = n(652215),
    S = n(985018),
    y = n(338652);
function w(e) {
    let {
            name: t,
            icon: n,
            imageSrc: s,
            iconBackgroundColor: w,
            iconClassName: O,
            iconWrapperClassName: k,
            details: L,
            integration: R,
            buttonText: M,
            buttonDisabled: D,
            hasNextSection: P,
            onButtonClick: G,
            guildId: U,
            isScrolling: W,
            canShowMigrationTooltip: B,
            trailing: H,
        } = e,
        [z, V] = l.useState(!1),
        F = B && !W && !z && void 0 !== U && null != R,
        K = l.useRef(null),
        Y = l.useRef(null),
        q =
            null == M || null == G
                ? null
                : P
                  ? (0, i.jsxs)(g.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: Y,
                        children: [
                            (0, i.jsx)(x.E, { variant: "text-sm/normal", children: M }),
                            (0, i.jsx)(p._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: y.OW,
                            }),
                        ],
                    })
                  : (0, i.jsx)(A.$, { size: "sm", buttonRef: K, disabled: D, onClick: G, text: M });
    l.useEffect(() => {
        F &&
            E.default.track(T.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, _.H$)(U),
                application_id: R?.application.id,
                location: "overview",
            });
    }, [U, R?.application.id, F]);
    let Q =
            F && (null != Y.current || null != K.current)
                ? (0, i.jsx)(d.A, {
                      targetElementRef: P ? Y : K,
                      title: S.intl.string(S.t.ufFDiC),
                      body: S.intl.string(S.t.TyMJwC),
                      onRequestClose: () => {
                          V(!0), I.A.dismissOverviewTooltip(U, R.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        Z = (0, o.yK)([N.A], () =>
            null != R && null != U ? (N.A.getApplicationEntitlementsForGuild(R.application.id, U) ?? []) : [],
        ),
        J = (0, j.ON)(U, !0),
        $ = R?.application != null && Object.keys(J.result?.sections[R.application.id]?.commands ?? {}).length > 0,
        X = (0, i.jsxs)(g.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(C.A, {
                    name: t,
                    icon: n,
                    imageSrc: s,
                    iconBackgroundColor: w,
                    iconClassName: O,
                    iconWrapperClassName: k,
                    details: L,
                    isPremium: Z.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: l, integration: s, webhooks: a } = e;
                        return (
                            null != l.bot &&
                                s?.scopes?.includes(r.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new v.A(l.bot).isVerifiedBot()
                                        ? S.intl.string(S.t.xxcTGy)
                                        : S.intl.string(S.t.AOdOYr),
                                    icon: c.C,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: S.intl.formatToPlainString(S.t["6HqDfT"], { count: a.length }),
                                    icon: u.X,
                                }),
                            s?.scopes?.includes(r.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: S.intl.string(S.t["0hKkS+"]), icon: m.k }),
                            (0, i.jsx)(g.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, i.jsx)(h.C, {
                                    label: S.intl.string(S.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(R, $),
                }),
                Q,
                q,
                H,
            ],
        });
    return P
        ? (0, i.jsx)(b.D, {
              onClick: () => {
                  B && null != U && null != R && I.A.dismissOverviewTooltip(U, R.integration), G?.();
              },
              children: (0, i.jsx)(f.Z, { editable: !0, className: a()(y.Nr, y.vk), children: X }),
          })
        : (0, i.jsx)(f.Z, { editable: !0, className: y.Nr, children: X });
}
