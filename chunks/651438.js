n.d(t, { Q: () => r, k: () => s });
var l = n(216306),
    a = n(115982),
    i = n(520521);
function r(e) {
    let t = (0, a.SY)(e.steps);
    return null != t ? (0, a.WQ)(t) : (0, l.O)(e.task);
}
function s(e) {
    let t = (0, i.n)(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? (0, i.p)(e.task.helperMark) : void 0,
            a = n ?? t.get(e.taskId);
        return null == a
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: a,
                      name: null != n && null != e.task.helperName ? e.task.helperName : a.name,
                      task: (0, l.O)(e.task),
                      todoId: e.task.todoId,
                      line: r(e),
                  },
              ];
    });
}
