n.d(t, {
    OP: () => i,
    Q0: () => _,
    ix: () => o,
    jt: () => a,
    pq: () => r,
});
let r = 0,
    i = 1,
    a = 2;
function o(e) {
    if (e < 400 && e >= 100) return { code: i };
    if (e >= 400 && e < 500)
        switch (e) {
            case 401:
                return {
                    code: a,
                    message: "unauthenticated",
                };
            case 403:
                return {
                    code: a,
                    message: "permission_denied",
                };
            case 404:
                return {
                    code: a,
                    message: "not_found",
                };
            case 409:
                return {
                    code: a,
                    message: "already_exists",
                };
            case 413:
                return {
                    code: a,
                    message: "failed_precondition",
                };
            case 429:
                return {
                    code: a,
                    message: "resource_exhausted",
                };
            case 499:
                return {
                    code: a,
                    message: "cancelled",
                };
            default:
                return {
                    code: a,
                    message: "invalid_argument",
                };
        }
    if (e >= 500 && e < 600)
        switch (e) {
            case 501:
                return {
                    code: a,
                    message: "unimplemented",
                };
            case 503:
                return {
                    code: a,
                    message: "unavailable",
                };
            case 504:
                return {
                    code: a,
                    message: "deadline_exceeded",
                };
            default:
                return {
                    code: a,
                    message: "internal_error",
                };
        }
    return {
        code: a,
        message: "unknown_error",
    };
}
function _(e, t) {
    e.setAttribute("http.response.status_code", t);
    let n = o(t);
    "unknown_error" !== n.message && e.setStatus(n);
}
