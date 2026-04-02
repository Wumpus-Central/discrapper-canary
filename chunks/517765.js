n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(179771),
    o = n(311907),
    d = n(342494),
    c = n(397927),
    u = n(58149),
    m = n(264322),
    g = n(607940),
    x = n(427157),
    h = n(954571),
    p = n(447066),
    A = n(320426),
    b = n(652215),
    f = n(985018),
    _ = n(480283);
function N(e) {
    let {
            name: t,
            icon: n,
            imageSrc: s,
            iconBackgroundColor: N,
            iconClassName: j,
            iconWrapperClassName: T,
            details: v,
            integration: C,
            buttonText: I,
            buttonDisabled: E,
            hasNextSection: S,
            onButtonClick: y,
            guildId: O,
            isScrolling: w,
            canShowMigrationTooltip: R,
            trailing: k,
        } = e,
        [L, M] = l.useState(!1),
        G = R && !w && !L && void 0 !== O && null != C,
        U = l.useRef(null),
        D = l.useRef(null),
        P =
            null == I || null == y
                ? null
                : S
                  ? (0, i.jsxs)(c.BJc, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: D,
                        children: [
                            (0, i.jsx)(c.Text, { variant: "text-sm/normal", children: I }),
                            (0, i.jsx)(c._BQ, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: _.OW,
                            }),
                        ],
                    })
                  : (0, i.jsx)(c.Button, { size: "sm", buttonRef: U, disabled: E, onClick: y, text: I });
    l.useEffect(() => {
        G &&
            h.default.track(b.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, u.H$)(O),
                application_id: C?.application.id,
                location: "overview",
            });
    }, [O, C?.application.id, G]);
    let B =
            G && (null != D.current || null != U.current)
                ? (0, i.jsx)(d.AM, {
                      targetElementRef: S ? D : U,
                      title: f.intl.string(f.t.ufFDiC),
                      body: f.intl.string(f.t.TyMJwC),
                      onRequestClose: () => {
                          M(!0), A.A.dismissOverviewTooltip(O, C.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        W = (0, o.yK)([g.A], () =>
            null != C && null != O ? (g.A.getApplicationEntitlementsForGuild(C.application.id, O) ?? []) : [],
        ),
        H = (0, m.ON)(O, !0),
        V = C?.application != null && Object.keys(H.result?.sections[C.application.id]?.commands ?? {}).length > 0,
        z = (0, i.jsxs)(c.BJc, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(p.A, {
                    name: t,
                    icon: n,
                    imageSrc: s,
                    iconBackgroundColor: N,
                    iconClassName: j,
                    iconWrapperClassName: T,
                    details: v,
                    isPremium: W.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: l, integration: s, webhooks: a } = e;
                        return (
                            null != l.bot &&
                                s?.scopes?.includes(r.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new x.A(l.bot).isVerifiedBot()
                                        ? f.intl.string(f.t.xxcTGy)
                                        : f.intl.string(f.t.AOdOYr),
                                    icon: c.CnV,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: f.intl.formatToPlainString(f.t["6HqDfT"], { count: a.length }),
                                    icon: c.XC7,
                                }),
                            s?.scopes?.includes(r.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: f.intl.string(f.t["0hKkS+"]), icon: c.kC9 }),
                            (0, i.jsx)(c.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, i.jsx)(c.CR_, {
                                    label: f.intl.string(f.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(C, V),
                }),
                B,
                P,
                k,
            ],
        });
    return S
        ? (0, i.jsx)(c.DUT, {
              onClick: () => {
                  R && null != O && null != C && A.A.dismissOverviewTooltip(O, C.integration), y?.();
              },
              children: (0, i.jsx)(c.ZpM, { editable: !0, className: a()(_.Nr, _.vk), children: z }),
          })
        : (0, i.jsx)(c.ZpM, { editable: !0, className: _.Nr, children: z });
}
