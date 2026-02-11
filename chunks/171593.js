"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(741918),
    u = n(311907),
    c = n(73153),
    d = n(608299),
    _ = n(155718),
    f = n(775602),
    h = n(260762),
    p = n(861382),
    g = n(522602),
    E = n(234320),
    A = n(349688),
    I = n(839914),
    T = n(914905),
    y = n(652215),
    S = n(29719),
    v = n(431055);
let C = [];
function b(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: b = !1 } = e,
        N = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        R = (0, h.A)("attachments", l.Gl.HORIZONTAL),
        O = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: L,
            commandOptionStates: w,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: C, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        x = i.useMemo(() => L?.filter((e) => e.type === _.n4.ATTACHMENT && w?.[e.name]?.hasValue) ?? [], [L, w]),
        [P, M] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let k = i.useCallback(() => {
        R.focusFirstVisibleItem();
    }, [R]);
    (0, E.Vo)({ event: y.jej.FOCUS_ATTACHMENT_AREA, handler: k });
    let U = { isApplicationCommand: D, previousUploadOptions: P, uploadOptions: x },
        G = i.useRef(U);
    i.useEffect(() => {
        G.current = U;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = G.current;
            if (e) {
                let e = [];
                r.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    M(i);
            }
        }, [t, x.length, n]);
    let F = O.filter((e) => e.filename !== a);
    return (!D && 0 === F.length) || (D && 0 === x.length)
        ? null
        : (0, r.jsx)(o.hD, {
              navigator: R,
              children: (0, r.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsx)("ul", {
                          ref: i,
                          ...a,
                          className: s()(S.I, v.KK),
                          children: D
                              ? x.map((e) =>
                                    (0, r.jsx)(I.A, { channelId: t, keyboardModeEnabled: N, option: e }, e.name),
                                )
                              : F.map((e) =>
                                    (0, r.jsx)(
                                        T.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: N,
                                            clip: e.clip,
                                            size: b ? A.L.SMALL : A.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
function N(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: a, smallAttachments: s = !1 } = e;
    return i ? (0, r.jsx)(b, { channelId: t, type: n, ignoreFile: a, smallAttachments: s }) : null;
}
let R = i.memo(N);
