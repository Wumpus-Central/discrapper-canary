n.d(
    t,
    {},
    {
        K: function (e, t, n) {
            let i = document.elementFromPoint(t, n);
            if (null == i) throw Error();
            i.dispatchEvent(e);
        },
        _: function (e, t, n) {
            return new MouseEvent(e, { screenX: t, screenY: n, clientX: t, clientY: n, bubbles: !0, view: window });
        },
    },
);
