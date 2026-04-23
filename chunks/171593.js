"use strict";
n.d(t, { A: () => C }), n(321073);
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
    E = n(522602),
    m = n(234320),
    g = n(349688),
    A = n(839914),
    I = n(914905),
    T = n(652215),
    S = n(386016),
    y = n(429128);
let N = [];
function v(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: v = !1 } = e,
        C = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        O = (0, p.A)("attachments", l.Gl.HORIZONTAL),
        R = (0, u.bG)([E.A], () => E.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: b,
            commandOptions: D,
            commandOptionStates: L,
        } = (0, u.cf)([h.A], () => {
            let e = h.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: N, commandOptionStates: null };
            let n = h.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        w = i.useMemo(() => D?.filter((e) => e.type === _.n4.ATTACHMENT && L?.[e.name]?.hasValue) ?? [], [D, L]),
        [M, P] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let x = i.useCallback(() => {
        O.focusFirstVisibleItem();
    }, [O]);
    (0, m.Vo)({ event: T.jej.FOCUS_ATTACHMENT_AREA, handler: x });
    let k = { isApplicationCommand: b, previousUploadOptions: M, uploadOptions: w },
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
                    P(i);
            }
        }, [t, w.length, n]);
    let G = R.filter((e) => e.filename !== s);
    return (!b && 0 === G.length) || (b && 0 === w.length)
        ? null
        : (0, r.jsx)(o.hD, {
              navigator: O,
              children: (0, r.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, r.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: a()(S.I, y.KK),
                          children: b
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
                                            size: v ? g.L.SMALL : g.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let C = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: s, smallAttachments: a = !1 } = e;
    return i ? (0, r.jsx)(v, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
