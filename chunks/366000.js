r.d(t, {
    OP: () => a,
    Q0: () => _,
    ix: () => o,
    jt: () => i,
    pq: () => n,
});
let n = 0,
    a = 1,
    i = 2;
function o(e) {
    if (e < 400 && e >= 100) return { code: a };
    if (e >= 400 && e < 500)
        switch (e) {
            case 401:
                return {
                    code: i,
                    message: "unauthenticated",
                };
            case 403:
                return {
                    code: i,
                    message: "permission_denied",
                };
            case 404:
                return {
                    code: i,
                    message: "not_found",
                };
            case 409:
                return {
                    code: i,
                    message: "already_exists",
                };
            case 413:
                return {
                    code: i,
                    message: "failed_precondition",
                };
            case 429:
                return {
                    code: i,
                    message: "resource_exhausted",
                };
            case 499:
                return {
                    code: i,
                    message: "cancelled",
                };
            default:
                return {
                    code: i,
                    message: "invalid_argument",
                };
        }
    if (e >= 500 && e < 600)
        switch (e) {
            case 501:
                return {
                    code: i,
                    message: "unimplemented",
                };
            case 503:
                return {
                    code: i,
                    message: "unavailable",
                };
            case 504:
                return {
                    code: i,
                    message: "deadline_exceeded",
                };
            default:
                return {
                    code: i,
                    message: "internal_error",
                };
        }
    return {
        code: i,
        message: "unknown_error",
    };
}
function _(e, t) {
    e.setAttribute("http.response.status_code", t);
    let r = o(t);
    "unknown_error" !== r.message && e.setStatus(r);
}
