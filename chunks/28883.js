n.d(t, { d: () => r });
function r(e, t) {
    return (
        ("enroll" === t || "publish" === t) &&
        "string" == typeof e &&
        RegExp(
            `^https://client\\.vibeyard\\.tools/${t}/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`,
        ).test(e)
    );
}
