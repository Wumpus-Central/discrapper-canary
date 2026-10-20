r.d(o, { promptPublishApproval: () => l });
var e = r(28883),
    n = r(516288),
    i = r(373540);
function l(p) {
    let o = p.includes("/enroll/") ? "enroll" : "publish";
    (0, e.d)(p, o) &&
        (0, i.A)(
            n.k.PUBLISH_APPROVAL_REQUIRED,
            void 0,
            () => {
                window.open(p, "_blank", "noopener,noreferrer");
            },
            "conjure-publish-approval",
        );
}
