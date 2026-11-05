n.d(t, { default: () => F });
var l = n(477900),
    i = n(582128),
    a = n(189213),
    s = n(289873),
    r = n(834730),
    u = n(683438),
    o = n(136463),
    d = n(124077),
    c = n(855986),
    g = n(681579),
    m = n(535820),
    f = n(994500),
    h = n(287809),
    A = n(735547),
    b = n(242225);
function v(e) {
    return e.type === A.OK.FRIEND || e.type === A.OK.DM;
}
function x(e, t, n) {
    return e
        .filter(v)
        .map((e) => e.item)
        .filter((e) => (0, b.A)(e, t, n));
}
var S = n(235876),
    p = n(71393),
    y = n(145890),
    I = n(841459),
    C = n(213374),
    j = n(778712),
    k = n(652215),
    w = n(331322),
    E = n(966327),
    N = n(855755),
    T = n(290863),
    O = n(427262),
    R = n(75095),
    P = n(172799),
    B = n(839568);
let K = i.memo(function (e) {
    let { user: t, sendState: n, onInvite: a } = e,
        s = i.useId(),
        u = i.useCallback(() => a(t), [a, t]),
        o = (0, N.A)(n === P.iu.SENT),
        { status: d, isMobileOnline: g } = (0, c.cf)(
            [T.A],
            () => ({ status: T.A.getStatus(t.id), isMobileOnline: T.A.isMobileOnline(t.id) }),
            [t.id],
        );
    return (0, l.jsxs)("div", {
        ref: o,
        role: "listitem",
        tabIndex: -1,
        className: B.nM,
        children: [
            (0, l.jsx)(E.A, {
                user: t,
                size: j._3.SIZE_32,
                status: d !== k.clD.OFFLINE ? d : void 0,
                isMobile: g,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)(w.B, {
                gap: 0,
                className: B.qg,
                children: [
                    (0, l.jsx)(r.E, {
                        id: s,
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: O.Ay.getName(t),
                    }),
                    (0, l.jsx)(r.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: O.Ay.getUserTag(t, { decoration: "never" }),
                    }),
                ],
            }),
            (0, l.jsx)(R.A, { sendState: n, onInvite: u, nameId: s }),
        ],
    });
});
n(673383);
var M = n(752222),
    U = n(792996);
function F(e) {
    let t,
        n,
        A,
        b,
        { guildId: v, ...j } = e,
        {
            users: k,
            isLoading: w,
            search: E,
        } = (function () {
            let e = (0, c.yK)([m.A, f.A, h.default], () =>
                    x(m.A.getInviteSuggestionRows(), h.default.getCurrentUser()?.id, f.A),
                ),
                [t, n] = i.useState(!0),
                [l, a] = i.useState(!1),
                s = i.useRef(""),
                r = i.useCallback((e) => {
                    ((s.current = e), (0, g.B)(e));
                }, []);
            return (
                i.useEffect(() => {
                    !(async function () {
                        try {
                            (await (0, g.t)({ omitUserIds: new Set() }),
                                a(0 === x(m.A.getInviteSuggestionRows(), h.default.getCurrentUser()?.id, f.A).length));
                        } catch {
                            return;
                        } finally {
                            n(!1);
                        }
                        "" !== s.current && (0, g.B)(s.current);
                    })();
                }, []),
                { users: e, isLoading: t, hasNoFriends: l, search: r }
            );
        })(),
        { getSendState: N, handleInvite: T } =
            ((n =
                null != (t = (0, c.bG)([p.A], () => p.A.getGuild(v)?.linkedGameOrganization ?? null))
                    ? (0, y.A)(t)
                    : null),
            (A = (0, S.i)((e) => (null != n ? e[n] : void 0))),
            {
                getSendState: i.useCallback((e) => A?.[e] ?? null, [A]),
                handleInvite: i.useCallback(
                    (e) => {
                        null != t && (0, I.A)((0, y.A)(t), t, e, C.A);
                    },
                    [t],
                ),
            }),
        { data: O, isLoading: R } = (0, o.c)(v),
        [P, F] = i.useState(""),
        G = i.useCallback(
            (e) => {
                (F(e), E(e));
            },
            [E],
        ),
        H = i.useCallback(() => G(""), [G]),
        _ = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = k[t];
                return (0, l.jsx)(K, { user: n, sendState: N(n.id), onInvite: T }, n.id);
            },
            [k, N, T],
        ),
        z = w || (null == O && R);
    b =
        z || 0 === k.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  rowHeight: 192,
                  innerRole: "list",
                  renderRow: () =>
                      (0, l.jsx)(
                          "div",
                          {
                              role: "listitem",
                              className: B.h5,
                              children: z
                                  ? (0, l.jsx)(s.y, {})
                                  : (0, l.jsx)(r.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        children: U.intl.string(U.t.ojoWgX),
                                    }),
                          },
                          "status",
                      ),
              }
            : { sections: [k.length], sectionHeight: 0, rowHeight: 48, innerRole: "list", renderRow: _ };
    let D = (0, d.A)({ displayNoun: null }),
        Q = O?.name,
        q =
            null != Q
                ? U.intl.formatToPlainString(M.default.UoO0dk, { orgName: Q })
                : U.intl.formatToPlainString(M.default.cRK6SQ, { noun: D });
    return (0, l.jsx)(a.a, {
        ...j,
        title: U.intl.formatToPlainString(M.default.EnTIIr, { noun: D }),
        subtitle: z
            ? void 0
            : null != Q
              ? U.intl.formatToPlainString(M.default.VGOQ4v, {
                    orgName: Q,
                    noun: (0, d.A)({ displayNoun: null, lowercase: !0 }),
                })
              : U.intl.formatToPlainString(M.default.BBk7Qw, { noun: D }),
        input: z
            ? void 0
            : (0, l.jsx)(u.I, {
                  size: "md",
                  query: P,
                  onChange: G,
                  onClear: H,
                  placeholder: q,
                  "aria-label": q,
                  autoFocus: !0,
              }),
        listProps: b,
        actionBarInput: z
            ? void 0
            : (0, l.jsx)(r.E, {
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  children: U.intl.formatToPlainString(M.default.yKyx41, { days: 7 }),
              }),
        actions: [],
    });
}
