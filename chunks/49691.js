function r(e) {
    if (null == e) return window;
    if ('[object Window]' !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
    }
    return e;
}
n.d(t, { Z: () => r });
