n.d(e, { default: () => M });
var r,
    a = n(477900),
    i = n(582128),
    l = n(855986),
    s = n(189213),
    u = n(103557),
    o = n(80682),
    d = n(949744),
    c = n(696451);
n(543079);
var f = n(587426);
n(321073);
var m = n(620632),
    g = n(300649),
    h = n(405473),
    y = n(652215);
let p = /[\s,]+/,
    S = /^@/,
    w = /^\d{17,20}$/,
    _ = /^(.+)#0(?:000)?$/,
    b = /^(.+)#(\d{4})$/;
var x = (((r = {}).NOT_FOUND = "not_found"), (r.NOT_MEMBER = "not_member"), (r.AMBIGUOUS = "ambiguous"), r);
async function C(t, e) {
    let n = await (0, g.y)(t, {
        and_query: {
            usernames: {
                or_query: e.map((t) => {
                    let { username: e } = t;
                    return e;
                }),
            },
        },
        limit: 1e3,
    });
    if (n.type !== h.r.SUCCESSFUL_QUERY) throw n.body;
    return n.body.members.map((t) => {
        let { member: e } = t;
        return e.user;
    });
}
var T = n(792996);
let k = [];
function E(t) {
    let { text: e, reason: n } = t;
    switch (n) {
        case x.NOT_MEMBER:
            return T.intl.formatToPlainString(T.t.J63jJO, { entry: e });
        case x.AMBIGUOUS:
            return T.intl.formatToPlainString(T.t.wCQ7ar, { entry: e });
        case x.NOT_FOUND:
            return T.intl.formatToPlainString(T.t.s5752J, { entry: e });
    }
}
function M(t) {
    let e,
        { guildId: n, transitionState: r, onClose: g } = t,
        { addUsers: h } = (0, f.A)(n),
        [x, M] = i.useState(""),
        [v, A] = i.useState(null),
        [I, B] = i.useState(!1),
        [P, U] = i.useState(!1),
        [L, O] = i.useState(null),
        [N, F] = i.useState(!1),
        [R, q] = i.useState(!1),
        Q = L?.userIds ?? k;
    (0, o.k6)(n, Q);
    let j = (0, l.bG)(
        [c.Ay, d.A],
        () => Q.every((t) => null != c.Ay.getMember(n, t) || d.A.isMemberRequestSettled(n, t)),
        [n, Q],
    );
    (i.useEffect(() => {
        if (!N) return;
        let t = setTimeout(() => q(!0), 5e3);
        return () => clearTimeout(t);
    }, [N]),
        i.useEffect(() => {
            N && (j || R) && 0 !== Q.length && (F(!1), h(Q), g());
        }, [N, j, R, Q, h, g]));
    let G = i.useCallback((t) => {
            (M(t), A(null), B(!1), O(null), F(!1), q(!1));
        }, []),
        z = L?.userIds.length ?? 0;
    return (
        I
            ? (e = { type: "critical", role: "alert", message: T.intl.string(T.t.oQQn8z) })
            : null != L && L.unmatched.length > 0
              ? (e = {
                    type: "warning",
                    role: "status",
                    message: T.intl.formatToPlainString(T.t["4v3Uck"], {
                        count: z,
                        unmatched: new Intl.ListFormat(T.intl.currentLocale).format(L.unmatched.map(E)),
                    }),
                })
              : null != L &&
                (e = { type: "info", role: "status", message: T.intl.formatToPlainString(T.t.AKXptd, { count: z }) }),
        (0, a.jsx)(s.a, {
            transitionState: r,
            onClose: g,
            title: T.intl.string(T.t["57SgYx"]),
            subtitle: T.intl.formatToPlainString(T.t.X7ClgM, { max: 100 }),
            notice: e,
            input: (0, a.jsx)(u.f, {
                label: T.intl.string(T.t.qQBqNv),
                value: x,
                onChange: G,
                error: v,
                rows: 6,
                autoFocus: !0,
            }),
            actions: [
                { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: g },
                null == L
                    ? {
                          variant: "primary",
                          text: T.intl.string(T.t.hPpw6H),
                          loading: P,
                          disabled: "" === x.trim(),
                          onClick: async function () {
                              let t = (function (t) {
                                  let e = new Set(),
                                      n = [];
                                  for (let r of t.split(p)) {
                                      let t = r.trim().replace(S, "");
                                      if ("" === t) continue;
                                      let a = t.toLowerCase();
                                      e.has(a) ||
                                          (e.add(a),
                                          n.push(
                                              (function (t) {
                                                  if (w.test(t)) return { kind: "user_id", text: t, userId: t };
                                                  let e = _.exec(t);
                                                  if (null != e)
                                                      return {
                                                          kind: "username",
                                                          text: t,
                                                          username: e[1].toLowerCase(),
                                                      };
                                                  let n = b.exec(t);
                                                  return null != n
                                                      ? {
                                                            kind: "legacy_username_tag",
                                                            text: t,
                                                            username: n[1].toLowerCase(),
                                                            discriminator: n[2],
                                                        }
                                                      : { kind: "username", text: t, username: t.toLowerCase() };
                                              })(t),
                                          ));
                                  }
                                  return n;
                              })(x);
                              if (0 === t.length) return void A(T.intl.string(T.t.BGdrAB));
                              if (t.length > 100)
                                  return void A(T.intl.formatToPlainString(T.t["8B1n+M"], { max: 100 }));
                              U(!0);
                              try {
                                  let e = await (async function (t, e) {
                                      let n = [],
                                          r = [];
                                      for (let t of e) "user_id" === t.kind ? n.push(t.userId) : r.push(t);
                                      let a = await (async function (t, e) {
                                              let n = new Set(e.filter((e) => null != c.Ay.getMember(t, e))),
                                                  r = e.filter((t) => !n.has(t));
                                              if (0 === r.length) return n;
                                              let a = await m.Bo.post({
                                                  url: y.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(t),
                                                  body: { user_ids: r },
                                                  rejectWithError: !0,
                                              });
                                              if (Array.isArray(a.body)) for (let t of a.body) n.add(t.user_id);
                                              return n;
                                          })(t, n),
                                          i = await (async function (t, e) {
                                              let n = new Map(),
                                                  r = [];
                                              function a(t, e) {
                                                  let a = new Set(
                                                      e
                                                          .filter(
                                                              (e) =>
                                                                  e.username.toLowerCase() === t.username &&
                                                                  ("legacy_username_tag" !== t.kind ||
                                                                      e.discriminator === t.discriminator),
                                                          )
                                                          .map((t) => t.id),
                                                  );
                                                  return 1 === a.size
                                                      ? (n.set(t.text, [...a][0]), !0)
                                                      : a.size > 1 &&
                                                            (r.push({ text: t.text, reason: "ambiguous" }), !0);
                                              }
                                              for (let n = 0; n < e.length; n += 10) {
                                                  let i = e.slice(n, n + 10),
                                                      l = await C(t, i);
                                                  for (let e of i)
                                                      !a(e, l) &&
                                                          ((i.length > 1 && a(e, await C(t, [e]))) ||
                                                              r.push({ text: e.text, reason: "not_found" }));
                                              }
                                              return { userIdsByText: n, unmatched: r };
                                          })(t, r),
                                          l = new Set(),
                                          s = [];
                                      for (let t of e)
                                          if ("user_id" === t.kind)
                                              a.has(t.userId)
                                                  ? l.add(t.userId)
                                                  : s.push({ text: t.text, reason: "not_member" });
                                          else {
                                              let e = i.userIdsByText.get(t.text);
                                              null != e && l.add(e);
                                          }
                                      return (s.push(...i.unmatched), { userIds: [...l], unmatched: s });
                                  })(n, t);
                                  O(e);
                              } catch {
                                  B(!0);
                              } finally {
                                  U(!1);
                              }
                          },
                      }
                    : {
                          variant: "primary",
                          text: T.intl.formatToPlainString(T.t["b6K+9r"], { count: z }),
                          loading: N,
                          disabled: 0 === z,
                          onClick: function () {
                              null != L && 0 !== L.userIds.length && F(!0);
                          },
                      },
            ],
        })
    );
}
