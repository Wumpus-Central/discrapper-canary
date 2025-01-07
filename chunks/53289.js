r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(392711);
var o = r(442837),
    l = r(208826),
    u = r(40851),
    c = r(607070),
    d = r(585483),
    f = r(981631);
let _ = (0, s.debounce)((e) => {
    setTimeout(() => {
        var n;
        null === (n = e.current) || void 0 === n || n.focus();
    }, 0);
}, 50);
function h(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, o.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        s = (0, l.Z)(),
        [h, p] = a.useState(!1),
        m = (0, u.Aq)();
    return (
        a.useEffect(() => {
            if (n) return r.addEventListener('blur', e), () => r.removeEventListener('blur', e);
            function e() {
                s && (m.dispatch(f.CkL.POPOUT_CLOSE), d.S.dispatch(f.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [r, s, n, m]),
        a.useEffect(() => {
            var a;
            if (i || !h || !n) return;
            let { current: o } = e,
                l = s;
            function u(n) {
                let r = n.relatedTarget;
                setTimeout(() => {
                    (null == r || 'BUTTON' === r.tagName) && !l && _(e);
                }, 100);
            }
            return (
                null == o || o.addEventListener('focusout', u),
                (null === (a = r.document.activeElement) || void 0 === a ? void 0 : a.tagName) !== 'IFRAME' && !l && (null == o || o.focus()),
                () => {
                    null == o || o.removeEventListener('focusout', u), (l = !0);
                }
            );
        }, [n, h, i, e, r, s]),
        p
    );
}
