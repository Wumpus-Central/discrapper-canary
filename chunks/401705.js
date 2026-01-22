function r(e) {
    if (a())
        e.focus({
            preventScroll: !0,
        });
    else {
        let t = s(e);
        e.focus(), o(t);
    }
}
n.d(t, {
    e: () => r,
});
let i = null;

function a() {
    if (null == i) {
        i = !1;
        try {
            document.createElement("div").focus({
                get preventScroll() {
                    return (i = !0), !0;
                },
            });
        } catch {}
    }
    return i;
}

function s(e) {
    let t = e.parentNode,
        n = [],
        r = document.scrollingElement || document.documentElement;
    for (; t instanceof HTMLElement && t !== r; )
        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
            n.push({
                element: t,
                scrollTop: t.scrollTop,
                scrollLeft: t.scrollLeft,
            }),
            (t = t.parentNode);
    return (
        r instanceof HTMLElement &&
            n.push({
                element: r,
                scrollTop: r.scrollTop,
                scrollLeft: r.scrollLeft,
            }),
        n
    );
}

function o(e) {
    for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
}
