function i(e) {
    if (null == e.application_id) return null;
    let t =
        e.session_id ??
        e.secrets?.join ??
        e.party?.id ??
        (e.timestamps?.start != null ? String(e.timestamps.start) : null);
    return null == t ? null : `${e.application_id}:${t}`;
}
n.d(t, { N: () => i });
