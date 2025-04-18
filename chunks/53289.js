n.d(t, { Z: () => f }), n(388685);
var r = n(192379),
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
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        f = (0, o.Z)(),
        [_, p] = r.useState(!1),
        h = (0, s.Aq)();
    return (
        r.useEffect(() => {
            if (t) return n.addEventListener('blur', e), () => n.removeEventListener('blur', e);
            function e() {
                f && (h.dispatch(u.CkL.POPOUT_CLOSE), c.S.dispatch(u.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [n, f, t, h]),
        r.useEffect(() => {
            var r;
            if (i || !_ || !t) return;
            let { current: a } = e,
                o = f;
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
                    null == a || a.removeEventListener('focusout', s), (o = !0);
                }
            );
        }, [t, _, i, e, n, f]),
        p
    );
}
