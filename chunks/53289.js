r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711);
var s = r(442837),
    l = r(208826),
    u = r(40851),
    c = r(607070),
    d = r(585483),
    f = r(981631);
let p = (0, o.debounce)((e) => {
    setTimeout(() => {
        var n;
        null === (n = e.current) || void 0 === n || n.focus();
    }, 0);
}, 50);
function h(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        o = (0, l.Z)(),
        [h, _] = a.useState(!1),
        m = (0, u.Aq)();
    return (
        a.useEffect(() => {
            if (n) return r.addEventListener('blur', e), () => r.removeEventListener('blur', e);
            function e() {
                o && (m.dispatch(f.CkL.POPOUT_CLOSE), d.S.dispatch(f.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [r, o, n, m]),
        a.useEffect(() => {
            var a;
            if (i || !h || !n) return;
            let { current: s } = e,
                l = o;
            function u(n) {
                let r = n.relatedTarget;
                setTimeout(() => {
                    (null == r || 'BUTTON' === r.tagName) && !l && p(e);
                }, 100);
            }
            return (
                null == s || s.addEventListener('focusout', u),
                (null === (a = r.document.activeElement) || void 0 === a ? void 0 : a.tagName) !== 'IFRAME' && !l && (null == s || s.focus()),
                () => {
                    null == s || s.removeEventListener('focusout', u), (l = !0);
                }
            );
        }, [n, h, i, e, r, o]),
        _
    );
}
