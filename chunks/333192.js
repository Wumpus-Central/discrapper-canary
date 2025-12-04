function n(e, ...t) {
    let r = new String(String.raw(e, ...t));
    return (
        (r.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s")),
        (r.__sentry_template_values__ = t),
        r
    );
}
r.d(t, { X: () => n });
