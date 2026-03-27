n.d(t, { i: () => i });
function i(e) {
    try {
        let t = JSON.parse(e);
        if ("string" == typeof t?.title && "string" == typeof t?.brief_summary)
            return {
                title: t.title,
                brief_summary: t.brief_summary,
                key_points: Array.isArray(t.key_points)
                    ? t.key_points.map((e) => e?.text).filter((e) => "string" == typeof e)
                    : [],
            };
        return null;
    } catch {
        return null;
    }
}
