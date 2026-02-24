"use strict";
n.d(t, { A: () => b }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(741918),
    u = n(311907),
    c = n(73153),
    d = n(608299),
    _ = n(155718),
    f = n(775602),
    p = n(260762),
    h = n(861382),
    m = n(522602),
    E = n(234320),
    g = n(349688),
    A = n(839914),
    I = n(914905),
    T = n(652215),
    S = n(29719),
    y = n(431055);
let v = [];
function N(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: N = !1 } = e,
        C = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        b = (0, p.A)("attachments", l.Gl.HORIZONTAL),
        R = (0, u.bG)([m.A], () => m.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: O,
            commandOptions: D,
            commandOptionStates: L,
        } = (0, u.cf)([h.A], () => {
            let e = h.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: v, commandOptionStates: null };
            let n = h.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        w = i.useMemo(() => D?.filter((e) => e.type === _.n4.ATTACHMENT && L?.[e.name]?.hasValue) ?? [], [D, L]),
        [x, M] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let P = i.useCallback(() => {
        b.focusFirstVisibleItem();
    }, [b]);
    (0, E.Vo)({ event: T.jej.FOCUS_ATTACHMENT_AREA, handler: P });
    let k = { isApplicationCommand: O, previousUploadOptions: x, uploadOptions: w },
        U = i.useRef(k);
    i.useEffect(() => {
        U.current = k;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = U.current;
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
        }, [t, w.length, n]);
    let G = R.filter((e) => e.filename !== s);
    return (!O && 0 === G.length) || (O && 0 === w.length)
        ? null
        : (0, r.jsx)(o.hD, {
              navigator: b,
              children: (0, r.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, r.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: a()(S.I, y.KK),
                          children: O
                              ? w.map((e) =>
                                    (0, r.jsx)(A.A, { channelId: t, keyboardModeEnabled: C, option: e }, e.name),
                                )
                              : G.map((e) =>
                                    (0, r.jsx)(
                                        I.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: C,
                                            clip: e.clip,
                                            size: N ? g.L.SMALL : g.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
function C(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: s, smallAttachments: a = !1 } = e;
    return i ? (0, r.jsx)(N, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
}
let b = i.memo(C);
