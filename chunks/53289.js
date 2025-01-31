n.d(t, { Z: () => f }), n(47120);
var i = n(192379),
    r = n(392711),
    a = n(442837),
    s = n(208826),
    o = n(40851),
    l = n(607070),
    u = n(585483),
    c = n(981631);
let d = (0, r.debounce)((e) => {
    setTimeout(() => {
        var t;
        null === (t = e.current) || void 0 === t || t.focus();
    }, 0);
}, 50);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        r = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        f = (0, s.Z)(),
        [_, p] = i.useState(!1),
        h = (0, o.Aq)();
    return (
        i.useEffect(() => {
            if (t) return n.addEventListener('blur', e), () => n.removeEventListener('blur', e);
            function e() {
                f && (h.dispatch(c.CkL.POPOUT_CLOSE), u.S.dispatch(c.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [n, f, t, h]),
        i.useEffect(() => {
            var i;
            if (r || !_ || !t) return;
            let { current: a } = e,
                s = f;
            function o(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null != n && 'BUTTON' !== n.tagName) || s || d(e);
                }, 100);
            }
            return (
                null == a || a.addEventListener('focusout', o),
                (null === (i = n.document.activeElement) || void 0 === i ? void 0 : i.tagName) === 'IFRAME' || s || null == a || a.focus(),
                () => {
                    null == a || a.removeEventListener('focusout', o), (s = !0);
                }
            );
        }, [t, _, r, e, n, f]),
        p
    );
}
