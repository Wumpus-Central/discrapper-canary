i.d(e, { trustGraphMachine: () => s }), i(209688), i(588233);
let s = (0, i(64755).t)({ types: { context: {}, events: {} } }).createMachine({
    id: "trust-graph",
    initial: "idle",
    context: {},
    states: { idle: { on: { LOAD: { target: "finished" } } }, finished: { type: "final" } },
});
