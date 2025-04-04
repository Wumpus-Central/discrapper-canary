function r(e) {
    if (e.applications.length > 0) return e.applications[0].id;
    if (e.windows.length > 0) {
        var t, n;
        return null != (n = null == (t = e.windows[0].owningApplication) ? void 0 : t.id) ? n : null;
    }
    return null;
}
n.d(t, { Z: () => r });
