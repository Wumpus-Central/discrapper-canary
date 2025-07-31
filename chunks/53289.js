(n.d(t, { Z: () => _ }), n(388685));
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(208826),
    s = n(40851),
    l = n(607070),
    c = n(585483),
    u = n(981631);
let d = (0, i.debounce)((e) => {
    setTimeout(() => {
        var t;
        null == (t = e.current) || t.focus();
    }, 0);
}, 50);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        _ = (0, o.Z)(),
        [f, p] = r.useState(!1),
        h = (0, s.Aq)();
    return (
        r.useEffect(() => {
            if (t) return (n.addEventListener('blur', e), () => n.removeEventListener('blur', e));
            function e() {
                _ && (h.dispatch(u.CkL.POPOUT_CLOSE), c.S.dispatch(u.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [n, _, t, h]),
        r.useEffect(() => {
            var r;
            if (i || !f || !t) return;
            let { current: a } = e,
                o = _;
            function s(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null != n && 'BUTTON' !== n.tagName) || o || d(e);
                }, 100);
            }
            return (
                null == a || a.addEventListener('focusout', s),
                (null == (r = n.document.activeElement) ? void 0 : r.tagName) === 'IFRAME' || o || null == a || a.focus(),
                () => {
                    (null == a || a.removeEventListener('focusout', s), (o = !0));
                }
            );
        }, [t, f, i, e, n, _]),
        p
    );
}
