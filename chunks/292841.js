n.d(t, { I: () => a });
var r = n(64700);
let i = 1000;
function a(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: a } = e,
        o = (0, r.useRef)({
            search: "",
            timeout: void 0,
        }).current,
        l = (e) => {
            let r = s(e.key);
            if (
                r &&
                !e.ctrlKey &&
                !e.metaKey &&
                e.currentTarget.contains(e.target) &&
                (0 !== o.search.length || " " !== r)
            ) {
                if (
                    (" " === r &&
                        o.search.trim().length > 0 &&
                        (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                    (o.search += r),
                    null != t.getKeyForSearch)
                ) {
                    let e = t.getKeyForSearch(o.search, n.focusedKey);
                    null == e && (e = t.getKeyForSearch(o.search)), null != e && (n.setFocusedKey(e), a && a(e));
                }
                clearTimeout(o.timeout),
                    (o.timeout = setTimeout(() => {
                        o.search = "";
                    }, i));
            }
        };
    return { typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? l : void 0 } };
}
function s(e) {
    return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e;
}
