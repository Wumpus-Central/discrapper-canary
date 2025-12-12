function r(e, ...t) {
    let n = new String(String.raw(e, ...t));
    return (
        (n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s")),
        (n.__sentry_template_values__ = t),
        n
    );
}
n.d(t, { X: () => r });
