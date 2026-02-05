"use strict";
n.d(t, { A: () => N }), n(321073);
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
    p = n(260762),
    h = n(861382),
    m = n(522602),
    g = n(234320),
    E = n(349688),
    A = n(839914),
    I = n(914905),
    T = n(652215),
    y = n(896189),
    S = n(829681);
let v = [];
function C(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: C = !1 } = e,
        b = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        N = (0, p.A)("attachments", l.Gl.HORIZONTAL),
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
        [x, P] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let M = i.useCallback(() => {
        N.focusFirstVisibleItem();
    }, [N]);
    (0, g.Vo)({ event: T.jej.FOCUS_ATTACHMENT_AREA, handler: M });
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
                    P(i);
            }
        }, [t, w.length, n]);
    let G = R.filter((e) => e.filename !== a);
    return (!O && 0 === G.length) || (O && 0 === w.length)
        ? null
        : (0, r.jsx)(o.hD, {
              navigator: N,
              children: (0, r.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsx)("ul", {
                          ref: i,
                          ...a,
                          className: s()(y.I, S.KK),
                          children: O
                              ? w.map((e) =>
                                    (0, r.jsx)(A.A, { channelId: t, keyboardModeEnabled: b, option: e }, e.name),
                                )
                              : G.map((e) =>
                                    (0, r.jsx)(
                                        I.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: b,
                                            clip: e.clip,
                                            size: C ? E.L.SMALL : E.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
function b(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: a, smallAttachments: s = !1 } = e;
    return i ? (0, r.jsx)(C, { channelId: t, type: n, ignoreFile: a, smallAttachments: s }) : null;
}
let N = i.memo(b);
