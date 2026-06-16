"use strict";n.d(t,{T:()=>o}),n(321073);var i=n(143236),r=n(941426),s=n(179689);let a=new r.Vy("Flux");class o extends i.EventEmitter{logs=[];persist;constructor({persist:e=!1}={}){super(),this.persist=e}log(e,t){let n=new u(e),i=(t,i)=>{let r,a={name:t,time:-1},o=s.FO.now();try{r=i()}finally{a.time=s.FO.now()-o,this.persist&&n.traces.push(a),this.emit("trace",e.type,t,a.time)}return r};n.startTime=s.FO.now();try{t(i)}catch(e){throw n.error=e,e}finally{n.totalTime=s.FO.now()-n.startTime,this.persist&&n.totalTime>0&&this.logs.push(n),this.logs.length>1e3&&this.logs.shift(),this.emit("log",e)}return n}getSlowestActions(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=[];for(let t of this.logs)if(null==e||t.name===e)for(let e of t.traces)i.push([e.name,t.name,e.time]);i.sort((e,t)=>t[2]-e[2]),i.length>t&&(i.length=t);let r=0,s=0,o=i.map(t=>{let[n,i,s]=t,a=`${n}`;return null==e&&(a+=`<${i}>`),r=Math.max(a.length,r),[a,s]}).map(e=>{let[t,n]=e;return s+=n,`${t.padEnd(r+1," ")} - ${n}ms`}).join("\n");return 0===i.length||i[0][2]<10||s<20||(a.log("Using Hermes:",void 0!==n.g?.HermesInternal),a.log(`${null!=e?`

=== ${e} ===`:""}
${o}
`),a.log(`Total Time: ${s}ms`)),i}getLastActionMetrics(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i={};for(let e of this.logs)for(let t of e.traces)i[t.name]=[t.name,e.name,t.time];let r=Object.values(i);r.sort((e,t)=>t[2]-e[2]),r.length>t&&(r.length=t);let s=0,o=0,l=r.map(e=>{let[t,n,i]=e;return s=Math.max(t.length,s),[t,i]}).map(e=>{let[t,n]=e;return o+=n,`${t.padEnd(s+1," ")} - ${n}ms`}).join("\n");return 0===r.length||o<8||a.log(`
Using Hermes: ${void 0!==n.g?.HermesInternal}`,`

=== ${e} ===
${l}`,`
Total Time: ${o}ms

`),r}}let l=0;class u{id;action;createdAt;startTime=0;totalTime=0;traces=[];error;constructor(e){this.id=l++,this.action=e,this.createdAt=new Date}get name(){return this.action.type}toJSON(){if(null==this.createdAt)throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");return{actionType:this.action.type,created_at:this.createdAt,totalTime:this.totalTime,traces:this.traces}}}