s.d(t, { default: () => O });
var i = s(627968),
    o = s(64700),
    r = s(503698),
    c = s.n(r),
    n = s(111956),
    l = s.n(n),
    a = s(33851),
    d = s.n(a),
    u = s(702841),
    h = s(430392),
    m = s(39619),
    j = s(836480),
    I = s(101277),
    p = s(173936),
    x = s(687966),
    N = s(834730),
    _ = s(980707),
    v = s(477782),
    C = s(921853),
    E = s(583650),
    g = s(320448),
    b = s(71393),
    y = s(351906),
    U = s(509402),
    A = s(282054),
    T = s(151781),
    S = s(221950),
    R = s(11541),
    k = s(636537),
    w = s(652215);
let L = new Map();
var P = s(375708),
    f = s(837719),
    K = s(359823);
let D = [
    R.UP.DISCOVERY,
    R.UP.VANITY_URL,
    R.UP.BOT,
    R.UP.HUB,
    R.UP.MANUAL_MEMBER_VERIFICATION,
    R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function z(e) {
    let { type: t, text: s, size: o, vanityUrl: r, isFocused: n } = e,
        l = o ?? 16,
        a = (function (e, t) {
            switch (e) {
                case R.UP.BOT:
                    return (0, i.jsx)(h.C, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                case R.UP.INTEGRATION:
                    return (0, i.jsx)(m.X, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                case R.UP.DISCOVERY:
                    return (0, i.jsx)(j.Q, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                case R.UP.HUB:
                    return (0, i.jsx)(I.P, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                case R.UP.INVITE:
                case R.UP.VANITY_URL:
                    return (0, i.jsx)(p.q, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                case R.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, i.jsx)(U.A, { className: f.Kk, height: t, width: t });
                case R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, i.jsx)(x._, {
                        size: "custom",
                        color: "currentColor",
                        className: f.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, l),
        d = (0, R.CI)(t, r);
    return (0, i.jsxs)("div", {
        className: f.$E,
        "aria-label": d,
        children: [
            null != a ? a : null,
            (0, i.jsx)(N.E, {
                variant: 12 === l ? "text-xs/medium" : "text-sm/medium",
                className: c()(f.QK, { [f.in]: n }),
                children: s,
            }),
        ],
    });
}
function O(e) {
    let { guildId: t, onClose: s } = e,
        r = (0, u.bG)([T.A], () => T.A.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: n } = (function (e) {
            let [t, s] = o.useState(L.has(e) ? Array.from(L.get(e)) : []),
                [i, r] = o.useState(!1),
                c = o.useMemo(() => t.map((e) => e.code), [t]),
                n = o.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
                l = o.useCallback(async () => {
                    r(!0);
                    let t = (await k.Bo.get({ url: w.Rsh.GUILD_INSTANT_INVITES(e), rejectWithError: !0 })).body.sort(
                        (e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
                    );
                    s(t), L.set(e, new Set(t)), r(!1);
                }, [e]);
            return (
                o.useEffect(() => {
                    l();
                }, [e, l]),
                { invitesRaw: t, inviteCodes: c, invitesByCode: n, loading: i }
            );
        })(t),
        a = (0, u.bG)([b.A], () => b.A.getGuild(t)),
        h = a?.vanityURLCode ?? null,
        [m, j] = o.useState(!1),
        { selectedSourceInviteCode: I, selectedJoinSourceType: p } = r,
        x = null != p && p !== R.UP.UNSPECIFIED,
        U = (0, u.bG)([y.A], () => y.A.hideInstantInvites, []);
    U && (n = []);
    let O = o.useMemo(
        () =>
            l()((e) => {
                let s = e.trim();
                (0, S.Ld)(t, { selectedSourceInviteCode: "" !== s ? s : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    o.useEffect(
        () => () => {
            O.cancel();
        },
        [O],
    );
    let G = o.useCallback(
            (e) => {
                let s = e.trim();
                (0, S.Ld)(t, { selectedSourceInviteCode: "" !== s ? s : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        M = o.useCallback(
            (e) => {
                e === p
                    ? (0, S.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, S.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    j(!1);
            },
            [t, p],
        ),
        V = o.useCallback(
            (e) => {
                (0, S.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), O(e);
            },
            [t, O],
        );
    return (0, i.jsx)(_.W, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            s();
        },
        "aria-label": P.intl.string(P.t["u/7Rdc"]),
        onSelect: w.tEg,
        children: m
            ? (0, i.jsxs)(v.rX, {
                  children: [
                      (0, i.jsx)(v.Dr, {
                          id: "back",
                          action: () => j(!1),
                          render: (e) =>
                              (0, i.jsxs)("span", {
                                  ...e,
                                  className: f.RX,
                                  children: [
                                      (0, i.jsx)(C.n, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: f.__invalid_caret,
                                      }),
                                      (0, i.jsx)(N.E, {
                                          variant: "eyebrow",
                                          color: "text-strong",
                                          children: P.intl.string(P.t["Kz/cho"]),
                                      }),
                                  ],
                              }),
                      }),
                      D.map((e) =>
                          (0, i.jsx)(
                              v.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, i.jsx)(z, { ...t, type: e, vanityUrl: h, text: (0, R.CI)(e, h, U) }),
                                  checked: p === e,
                                  disabled: !1,
                                  action: () => M(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, i.jsxs)(v.rX, {
                  children: [
                      (0, i.jsx)(
                          v.aK,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, i.jsx)(E.V, {
                                      ...e,
                                      query: I ?? "",
                                      onChange: V,
                                      ref: t,
                                      placeholder: P.intl.string(P.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, i.jsx)(v.bX, {}),
                      (0, i.jsx)(
                          v.iD,
                          {
                              id: "join-source-type-option-all",
                              label: P.intl.string(P.t.an9Ry3),
                              checked: null == I && null == p,
                              disabled: !1,
                              action: () => M(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      n.map((e) =>
                          (0, i.jsx)(
                              v.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, i.jsx)(z, { ...t, type: R.UP.INVITE, vanityUrl: h, text: e }),
                                  checked: I === e,
                                  disabled: !1,
                                  action: () => G(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, i.jsx)(v.bX, {}),
                      (0, i.jsx)(
                          v.Dr,
                          {
                              id: "other-join-methods",
                              action: () => j(!0),
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: c()(f.RI, f.RX),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: K.label,
                                              children: [
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-sm/medium",
                                                      className: c()(f.__invalid_selectedRadio, f.QK, {
                                                          [f.in]: e.isFocused,
                                                      }),
                                                      children: P.intl.string(P.t["Kz/cho"]),
                                                  }),
                                                  x
                                                      ? (0, i.jsx)("div", {
                                                            className: f.TF,
                                                            children: (0, i.jsx)(z, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, R.CI)(p, h, U),
                                                                type: p,
                                                                vanityUrl: h,
                                                            }),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          x
                                              ? (0, i.jsx)(A.A, {
                                                    background: f.__invalid_radio,
                                                    foreground: f.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, i.jsx)(g._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: f.__invalid_caret,
                                                }),
                                      ],
                                  }),
                          },
                          "other-join-methods",
                      ),
                  ],
              }),
    });
}
