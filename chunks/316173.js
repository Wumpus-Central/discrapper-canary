o.d(t, { default: () => D });
var i = o(627968),
    s = o(64700),
    n = o(649852),
    c = o.n(n),
    r = o(811315),
    l = o.n(r),
    a = o(702841),
    d = o(430392),
    u = o(39619),
    h = o(836480),
    I = o(101277),
    p = o(173936),
    m = o(687966),
    j = o(834730),
    C = o(980707),
    N = o(477782),
    b = o(921853),
    y = o(583650),
    x = o(320448),
    A = o(71393),
    E = o(351906),
    U = o(509402),
    g = o(151781),
    v = o(221950),
    _ = o(11541),
    S = o(636537),
    T = o(652215);
let L = new Map();
var P = o(375708),
    R = o(921815);
let w = [
    _.UP.DISCOVERY,
    _.UP.VANITY_URL,
    _.UP.BOT,
    _.UP.HUB,
    _.UP.MANUAL_MEMBER_VERIFICATION,
    _.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function f(e) {
    let { type: t, text: o, vanityUrl: s } = e,
        n = (function (e) {
            switch (e) {
                case _.UP.BOT:
                    return (0, i.jsx)(d.C, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                case _.UP.INTEGRATION:
                    return (0, i.jsx)(u.X, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                case _.UP.DISCOVERY:
                    return (0, i.jsx)(h.Q, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                case _.UP.HUB:
                    return (0, i.jsx)(I.P, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                case _.UP.INVITE:
                case _.UP.VANITY_URL:
                    return (0, i.jsx)(p.q, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                case _.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, i.jsx)(U.A, { className: R.K, height: 16, width: 16 });
                case _.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, i.jsx)(m._, {
                        size: "custom",
                        color: "currentColor",
                        className: R.K,
                        height: 16,
                        width: 16,
                    });
                default:
                    return null;
            }
        })(t),
        c = (0, _.CI)(t, s);
    return (0, i.jsxs)("div", {
        className: R.$,
        "aria-label": c,
        children: [null != n ? n : null, (0, i.jsx)(j.E, { variant: "text-sm/medium", children: o })],
    });
}
function D(e) {
    let { guildId: t, onClose: o } = e,
        n = (0, a.bG)([g.A], () => g.A.getSearchStateByGuildId(t), [t], l()),
        { inviteCodes: r } = (function (e) {
            let [t, o] = s.useState(L.has(e) ? Array.from(L.get(e)) : []),
                [i, n] = s.useState(!1),
                c = s.useMemo(() => t.map((e) => e.code), [t]),
                r = s.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
                l = s.useCallback(async () => {
                    n(!0);
                    let t = (await S.Bo.get({ url: T.Rsh.GUILD_INSTANT_INVITES(e), rejectWithError: !0 })).body.sort(
                        (e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
                    );
                    o(t), L.set(e, new Set(t)), n(!1);
                }, [e]);
            return (
                s.useEffect(() => {
                    l();
                }, [e, l]),
                { invitesRaw: t, inviteCodes: c, invitesByCode: r, loading: i }
            );
        })(t),
        d = (0, a.bG)([A.A], () => A.A.getGuild(t)),
        u = d?.vanityURLCode ?? null,
        [h, I] = s.useState(!1),
        { selectedSourceInviteCode: p, selectedJoinSourceType: m } = n,
        j = null != m && m !== _.UP.UNSPECIFIED,
        U = (0, a.bG)([E.A], () => E.A.hideInstantInvites, []);
    U && (r = []);
    let R = s.useMemo(
        () =>
            c()((e) => {
                let o = e.trim();
                (0, v.Ld)(t, { selectedSourceInviteCode: "" !== o ? o : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    s.useEffect(
        () => () => {
            R.cancel();
        },
        [R],
    );
    let D = s.useCallback(
            (e) => {
                let o = e.trim();
                (0, v.Ld)(t, { selectedSourceInviteCode: "" !== o ? o : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        k = s.useCallback(
            (e) => {
                e === m
                    ? (0, v.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, v.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    I(!1);
            },
            [t, m],
        ),
        K = s.useCallback(
            (e) => {
                (0, v.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), R(e);
            },
            [t, R],
        );
    return (0, i.jsx)(C.W, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: function () {
            o();
        },
        "aria-label": P.intl.string(P.t["u/7Rdc"]),
        onSelect: T.tEg,
        children: h
            ? (0, i.jsxs)(N.rX, {
                  children: [
                      (0, i.jsx)(N.Dr, {
                          id: "back",
                          iconLeft: b.n,
                          leadingAccessory: { type: "icon", icon: b.n },
                          label: P.intl.string(P.t["Kz/cho"]),
                          action: () => I(!1),
                      }),
                      w.map((e) =>
                          (0, i.jsx)(
                              N.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, i.jsx)(f, { ...t, type: e, vanityUrl: u, text: (0, _.CI)(e, u, U) }),
                                  checked: m === e,
                                  disabled: !1,
                                  action: () => k(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, i.jsxs)(N.rX, {
                  children: [
                      (0, i.jsx)(
                          N.aK,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, i.jsx)(y.V, {
                                      ...e,
                                      query: p ?? "",
                                      onChange: K,
                                      ref: t,
                                      placeholder: P.intl.string(P.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, i.jsx)(N.bX, {}),
                      (0, i.jsx)(
                          N.iD,
                          {
                              id: "join-source-type-option-all",
                              label: P.intl.string(P.t.an9Ry3),
                              checked: null == p && null == m,
                              disabled: !1,
                              action: () => k(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      r.map((e) =>
                          (0, i.jsx)(
                              N.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, i.jsx)(f, { ...t, type: _.UP.INVITE, vanityUrl: u, text: e }),
                                  checked: p === e,
                                  disabled: !1,
                                  action: () => D(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, i.jsx)(N.bX, {}),
                      (0, i.jsx)(
                          N.Dr,
                          {
                              id: "other-join-methods",
                              label: P.intl.string(P.t["Kz/cho"]),
                              subtext: j ? (0, _.CI)(m, u, U) : void 0,
                              icon: x._,
                              trailingIndicator: { type: "icon", icon: x._ },
                              action: () => I(!0),
                          },
                          "other-join-methods",
                      ),
                  ],
              }),
    });
}
