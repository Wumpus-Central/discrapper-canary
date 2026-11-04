var p = o(620632),
    s = o(652215);
o.d(
    e,
    {},
    {
        A: {
            resolveFlag: (r) => p.Bo.post({ url: s.Rsh.MODERATOR_REPORT_CLOSE(r), body: {}, rejectWithError: !0 }),
            reopenModReport: (r) => p.Bo.put({ url: s.Rsh.REPORT_TO_MOD_REOPEN(r), rejectWithError: !0 }),
        },
    },
);
