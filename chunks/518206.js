var n = r(809297),
    i = r(842836);
r.d(
    t,
    {},
    {
        ae: function (e) {
            if (!e) return !1;
            let t = e.getRootNode(),
                r = (0, n.mD)(e);
            if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) return !1;
            let i = t.activeElement;
            return null != i && e.contains(i);
        },
        bq: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            if (!(0, i.Nf)()) return e.activeElement;
            let t = e.activeElement;
            for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
            return t;
        },
        sD: function (e, t) {
            if (!(0, i.Nf)()) return !!t && !!e && e.contains(t);
            if (!e || !t) return !1;
            let r = t;
            for (; null !== r;) {
                if (r === e) return !0;
                r =
                    "function" != typeof r.assignedElements && r.assignedSlot?.parentNode
                        ? r.assignedSlot.parentNode
                        : (0, n.Ng)(r)
                          ? r.host
                          : r.parentNode;
            }
            return !1;
        },
        wt: function (e) {
            if ((0, i.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
                if ("composedPath" in e) return e.composedPath()[0] ?? null;
                else if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
            }
            return e.target;
        },
    },
);
