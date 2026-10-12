function l(e, n, t) {
    return "string" == typeof e.content || void 0 === e.content ? e.content : n(e.content, t);
}
function a(e) {
    return "home" === e || "browse" === e || "customize" === e || "guide" === e || "linked-roles" === e;
}
t.d(n, { d: () => a, t: () => l });
